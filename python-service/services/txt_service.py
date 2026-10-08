import fitz  # PyMuPDF
import os
import io
from fastapi import UploadFile, HTTPException

async def convert_pdf_to_txt(file: UploadFile):
    """
    Extracts high-fidelity plain text from a PDF document using PyMuPDF.
    Maintains basic layout and ensures proper encoding.
    """
    if not file.filename.lower().endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Only PDF files are supported.")

    try:
        content = await file.read()
    finally:
        await file.close()

    if not content:
        raise HTTPException(status_code=400, detail="Uploaded file is empty.")

    doc = None
    try:
        # Open the PDF with PyMuPDF
        doc = fitz.open(stream=content, filetype="pdf")
        
        full_text = []
        
        # Iterate through pages and extract text
        for page_num in range(len(doc)):
            page = doc.load_page(page_num)
            text = page.get_text("text")
            full_text.append(text)
            full_text.append("\n\n")

        # Join everything into a single string
        final_text = "".join(full_text).strip()
        
        if not final_text:
            final_text = "No machine-readable text found in this PDF. It might be a scanned document."

        # Convert to bytes for streaming
        txt_bytes = final_text.encode("utf-8")
        
        output_filename = os.path.splitext(file.filename)[0] + ".txt"
        
        return txt_bytes, output_filename

    except Exception as e:
        print(f"Txt Extraction Error: {e}")
        raise HTTPException(status_code=500, detail=f"Text extraction failed: {str(e)}")
    finally:
        if doc:
            try:
                doc.close()
            except Exception:
                pass
