import io
import os
import logging
from fastapi import HTTPException, UploadFile
import fitz  # PyMuPDF
from pptx import Presentation
from pptx.util import Pt

logger = logging.getLogger(__name__)

async def convert_pdf_to_pptx(file: UploadFile):
    """
    Convert a PDF file to a PowerPoint (.pptx) presentation.
    - Each PDF page becomes a high-resolution slide.
    - Slide dimensions match PDF page dimensions for perfect layout.
    """
    if not file.filename or not file.filename.lower().endswith(".pdf"):
        raise HTTPException(
            status_code=400,
            detail="Only PDF files are accepted. Please upload a .pdf file.",
        )

    logger.info(f"Converting to PowerPoint: {file.filename}")

    try:
        pdf_bytes = await file.read()
    finally:
        await file.close()

    if len(pdf_bytes) == 0:
        raise HTTPException(status_code=400, detail="Uploaded file is empty.")

    doc = None
    pptx_buffer = None
    try:
        # Open PDF from bytes
        doc = fitz.open(stream=pdf_bytes, filetype="pdf")
        prs = Presentation()
        
        for i in range(len(doc)):
            page = doc.load_page(i)
            width_pts = page.rect.width
            height_pts = page.rect.height
            
            prs.slide_width = Pt(width_pts)
            prs.slide_height = Pt(height_pts)
            
            blank_slide_layout = prs.slide_layouts[6] 
            slide = prs.slides.add_slide(blank_slide_layout)
            
            pix = page.get_pixmap(matrix=fitz.Matrix(300/72, 300/72))
            img_data = pix.tobytes("png")
            
            with io.BytesIO(img_data) as img_stream:
                slide.shapes.add_picture(img_stream, 0, 0, width=Pt(width_pts), height=Pt(height_pts))

        # Serialize to bytes
        pptx_buffer = io.BytesIO()
        prs.save(pptx_buffer)
        pptx_bytes = pptx_buffer.getvalue()

    except Exception as e:
        logger.error(f"PowerPoint conversion failed: {e}")
        raise HTTPException(status_code=500, detail=f"Conversion failed: {str(e)}")
    finally:
        if doc:
            try:
                doc.close()
            except Exception:
                pass
        if pptx_buffer:
            try:
                pptx_buffer.close()
            except Exception:
                pass

    base_name = os.path.splitext(file.filename)[0]
    output_filename = f"{base_name}.pptx"
    
    return pptx_bytes, output_filename
