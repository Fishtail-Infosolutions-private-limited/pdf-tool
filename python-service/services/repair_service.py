import fitz
import io
import logging

logger = logging.getLogger(__name__)

async def repair_pdf(file):
    """
    Repair a PDF file by using PyMuPDF's auto-repair functionality.
    """
    try:
        file_bytes = await file.read()
    finally:
        await file.close()

    doc = None
    out_stream = None
    try:
        # fitz.open will attempt to repair corrupted xref tables automatically
        doc = fitz.open(stream=file_bytes, filetype="pdf")
        
        # Save it to a bytes buffer with garbage collections and clean=True
        # This cleans up the file structure and removes unused objects
        out_stream = io.BytesIO()
        doc.save(
            out_stream,
            clean=True,
            deflate=True,
            garbage=4
        )
        
        output_filename = f"repaired_{file.filename}"
        if not output_filename.endswith(".pdf"):
            output_filename += ".pdf"
            
        return out_stream.getvalue(), output_filename
    except Exception as e:
        logger.error(f"Failed to repair PDF: {e}")
        raise
    finally:
        if doc:
            try:
                doc.close()
            except Exception:
                pass
        if out_stream:
            try:
                out_stream.close()
            except Exception:
                pass
