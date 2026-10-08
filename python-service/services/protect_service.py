import io
import fitz
from fastapi import UploadFile

async def protect_pdf(file: UploadFile, password: str):
    """
    Protect a PDF file with a password.
    """
    try:
        pdf_bytes = await file.read()
    finally:
        await file.close()

    doc = None
    out_io = None
    try:
        doc = fitz.open(stream=pdf_bytes, filetype="pdf")
        
        # Save the document with encryption
        # We use AES 256 for strong encryption
        out_io = io.BytesIO()
        doc.save(
            out_io,
            encryption=fitz.PDF_ENCRYPT_AES_256,
            user_pw=password,
            owner_pw=password
        )
        
        output_filename = f"protected_{file.filename}"
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
