import io
import fitz
from fastapi import UploadFile, HTTPException

async def unlock_pdf(file: UploadFile, password: str):
    """
    Unlock a password-protected PDF file.
    """
    try:
        pdf_bytes = await file.read()
    finally:
        await file.close()

    doc = None
    out_io = None
    try:
        try:
            doc = fitz.open(stream=pdf_bytes, filetype="pdf")
        except Exception:
            raise HTTPException(status_code=400, detail="Invalid PDF file.")

        if not doc.is_encrypted:
            raise HTTPException(status_code=400, detail="This PDF is not password protected.")

        # Try to authenticate/unlock
        if not doc.authenticate(password):
            raise HTTPException(status_code=401, detail="Incorrect password. Please try again.")

        # Save without encryption
        out_io = io.BytesIO()
        doc.save(out_io, encryption=fitz.PDF_ENCRYPT_NONE)
        
        output_filename = f"unlocked_{file.filename}"
        return out_io.getvalue(), output_filename
    finally:
        if doc:
            try:
                doc.close()
            except Exception:
                pass
        if out_io:
            try:
                out_io.close()
            except Exception:
                pass
