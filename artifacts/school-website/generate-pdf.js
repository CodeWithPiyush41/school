import fs from 'fs';
import path from 'path';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib/cjs/index.js';

async function generateAdmissionForm() {
  const pdfDoc = await PDFDocument.create();
  
  // A4 Page dimensions: 595.28 x 841.89
  const page = pdfDoc.addPage([595.28, 841.89]);
  const { width, height } = page.getSize();
  
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  
  const margin = 35;
  const contentWidth = width - 2 * margin; // 525.28
  
  // Colors
  const primaryBlue = rgb(0.08, 0.49, 0.88); // Royal Blue from image
  const darkGray = rgb(0.15, 0.15, 0.15);
  const lightGray = rgb(0.7, 0.7, 0.7);
  const borderGray = rgb(0.4, 0.4, 0.4);
  const zebraBg = rgb(0.96, 0.98, 1.0); // very soft blue/gray for headers

  let y = height - 40;

  // Title: [GREENFIELD ACADEMY]
  page.drawText('GREENFIELD ACADEMY', {
    x: width / 2 - fontBold.widthOfTextAtSize('GREENFIELD ACADEMY', 18) / 2,
    y: y,
    size: 18,
    font: fontBold,
    color: darkGray,
  });
  
  y -= 22;
  
  // Subtitle
  const subtitle = 'Admission Application Form (Academic Year 2026–2027)';
  page.drawText(subtitle, {
    x: width / 2 - fontBold.widthOfTextAtSize(subtitle, 12) / 2,
    y: y,
    size: 12,
    font: fontBold,
    color: darkGray,
  });
  
  y -= 28;

  // Helper function to draw Section Header
  function drawSectionHeader(title) {
    page.drawRectangle({
      x: margin,
      y: y - 18,
      width: contentWidth,
      height: 18,
      color: primaryBlue,
    });
    page.drawText(title, {
      x: margin + 8,
      y: y - 12,
      size: 9,
      font: fontBold,
      color: rgb(1, 1, 1),
    });
    y -= 18;
  }

  // Helper for text inputs
  function drawField(label, x, fieldY, fieldWidth, labelFont = fontBold, valueFont = font) {
    page.drawText(label, { x, y: fieldY, size: 8, font: labelFont, color: darkGray });
    const labelWidth = labelFont.widthOfTextAtSize(label, 8);
    // Draw underline for writing space
    page.drawLine({
      start: { x: x + labelWidth + 4, y: fieldY - 1 },
      end: { x: x + fieldWidth - 4, y: fieldY - 1 },
      color: lightGray,
      thickness: 0.75,
    });
  }

  // Helper for checkboxes
  function drawCheckbox(label, x, fieldY, isChecked = false) {
    // Checkbox square
    page.drawRectangle({
      x,
      y: fieldY - 1,
      width: 7,
      height: 7,
      borderColor: darkGray,
      borderWidth: 0.75,
    });
    if (isChecked) {
      // Draw small checkmark
      page.drawLine({ start: { x: x + 1, y: fieldY + 2 }, end: { x: x + 3, y: fieldY }, color: darkGray, thickness: 1 });
      page.drawLine({ start: { x: x + 3, y: fieldY }, end: { x: x + 6, y: fieldY + 5 }, color: darkGray, thickness: 1 });
    }
    page.drawText(label, { x: x + 12, y: fieldY - 1, size: 8, font, color: darkGray });
    return x + 12 + font.widthOfTextAtSize(label, 8) + 12;
  }

  // Helper to draw standard outer grid
  function drawGridBox(heightRows, rowHeight = 22) {
    const totalBoxHeight = heightRows * rowHeight;
    page.drawRectangle({
      x: margin,
      y: y - totalBoxHeight,
      width: contentWidth,
      height: totalBoxHeight,
      borderColor: borderGray,
      borderWidth: 0.75,
    });
    // horizontal division lines
    for (let i = 1; i < heightRows; i++) {
      page.drawLine({
        start: { x: margin, y: y - i * rowHeight },
        end: { x: margin + contentWidth, y: y - i * rowHeight },
        color: lightGray,
        thickness: 0.75,
      });
    }
  }

  // --- SECTION 1: STUDENT INFORMATION ---
  drawSectionHeader('STUDENT INFORMATION');
  const rowH = 22;
  drawGridBox(5, rowH);
  
  // Row 1: Full Name | Class
  let rowY = y - 15;
  drawField('Full Name:', margin + 8, rowY, 340);
  page.drawLine({ start: { x: margin + 350, y: y }, end: { x: margin + 350, y: y - rowH }, color: borderGray, thickness: 0.75 });
  drawField('Class:', margin + 358, rowY, 158);
  
  // Row 2: DOB | Gender
  y -= rowH;
  rowY = y - 15;
  drawField('DOB:', margin + 8, rowY, 150);
  page.drawText('(DD / MM / YYYY)', { x: margin + 165, y: rowY, size: 7, font, color: rgb(0.5, 0.5, 0.5) });
  page.drawLine({ start: { x: margin + 350, y: y }, end: { x: margin + 350, y: y - rowH }, color: borderGray, thickness: 0.75 });
  
  page.drawText('Gender:', { x: margin + 358, y: rowY, size: 8, font: fontBold, color: darkGray });
  let checkX = margin + 400;
  checkX = drawCheckbox('Male', checkX, rowY);
  checkX = drawCheckbox('Female', checkX, rowY);
  drawCheckbox('Other', checkX, rowY);

  // Row 3: Mother Tongue | Nationality
  y -= rowH;
  rowY = y - 15;
  drawField('Mother Tongue:', margin + 8, rowY, 340);
  page.drawLine({ start: { x: margin + 350, y: y }, end: { x: margin + 350, y: y - rowH }, color: borderGray, thickness: 0.75 });
  drawField('Nationality:', margin + 358, rowY, 158);

  // Row 4: Blood Group | Aadhaar No
  y -= rowH;
  rowY = y - 15;
  drawField('Blood Group:', margin + 8, rowY, 340);
  page.drawLine({ start: { x: margin + 350, y: y }, end: { x: margin + 350, y: y - rowH }, color: borderGray, thickness: 0.75 });
  drawField('Aadhaar No:', margin + 358, rowY, 158);

  // Row 5: Address | PIN
  y -= rowH;
  rowY = y - 15;
  drawField('Address:', margin + 8, rowY, 380);
  page.drawLine({ start: { x: margin + 390, y: y }, end: { x: margin + 390, y: y - rowH }, color: borderGray, thickness: 0.75 });
  drawField('PIN:', margin + 398, rowY, 118);

  y -= rowH; // reset y below Student Info box
  y -= 10; // spacing

  // --- SECTION 2: PARENT DETAILS ---
  drawSectionHeader('PARENT DETAILS');
  drawGridBox(4, rowH);

  // Row 1: Father's Name | Mobile
  rowY = y - 15;
  drawField("Father's Name:", margin + 8, rowY, 340);
  page.drawLine({ start: { x: margin + 350, y: y }, end: { x: margin + 350, y: y - rowH }, color: borderGray, thickness: 0.75 });
  drawField('Mobile:', margin + 358, rowY, 158);
  page.drawText('+91', { x: margin + 395, y: rowY, size: 8, font, color: darkGray });

  // Row 2: Occupation | Email
  y -= rowH;
  rowY = y - 15;
  drawField('Occupation:', margin + 8, rowY, 340);
  page.drawLine({ start: { x: margin + 350, y: y }, end: { x: margin + 350, y: y - rowH }, color: borderGray, thickness: 0.75 });
  drawField('Email:', margin + 358, rowY, 158);

  // Row 3: Mother's Name | Mobile
  y -= rowH;
  rowY = y - 15;
  drawField("Mother's Name:", margin + 8, rowY, 340);
  page.drawLine({ start: { x: margin + 350, y: y }, end: { x: margin + 350, y: y - rowH }, color: borderGray, thickness: 0.75 });
  drawField('Mobile:', margin + 358, rowY, 158);
  page.drawText('+91', { x: margin + 395, y: rowY, size: 8, font, color: darkGray });

  // Row 4: Occupation | Email
  y -= rowH;
  rowY = y - 15;
  drawField('Occupation:', margin + 8, rowY, 340);
  page.drawLine({ start: { x: margin + 350, y: y }, end: { x: margin + 350, y: y - rowH }, color: borderGray, thickness: 0.75 });
  drawField('Email:', margin + 358, rowY, 158);

  y -= rowH;
  y -= 10;

  // --- SECTION 3: PREVIOUS SCHOOL DETAILS ---
  drawSectionHeader('PREVIOUS SCHOOL');
  drawGridBox(2, rowH);

  // Row 1: School Name | Last Class
  rowY = y - 15;
  drawField('School Name:', margin + 8, rowY, 340);
  page.drawLine({ start: { x: margin + 350, y: y }, end: { x: margin + 350, y: y - rowH }, color: borderGray, thickness: 0.75 });
  drawField('Last Class:', margin + 358, rowY, 158);

  // Row 2: Percentage/Grade | TC No
  y -= rowH;
  rowY = y - 15;
  drawField('Percentage/Grade:', margin + 8, rowY, 340);
  page.drawLine({ start: { x: margin + 350, y: y }, end: { x: margin + 350, y: y - rowH }, color: borderGray, thickness: 0.75 });
  drawField('TC No:', margin + 358, rowY, 158);

  y -= rowH;
  y -= 10;

  // --- SECTION 4: DOCUMENT CHECKLIST ---
  drawSectionHeader('DOCUMENT CHECKLIST');
  drawGridBox(3, rowH);

  // Col divider in the middle
  page.drawLine({ start: { x: margin + 262, y: y }, end: { x: margin + 262, y: y - 3 * rowH }, color: borderGray, thickness: 0.75 });

  // Row 1: Birth Certificate | Report Card
  rowY = y - 15;
  drawCheckbox('Birth Certificate', margin + 15, rowY);
  drawCheckbox('Report Card', margin + 277, rowY);

  // Row 2: Aadhaar | 3 Passport Photos
  y -= rowH;
  rowY = y - 15;
  drawCheckbox('Aadhaar', margin + 15, rowY);
  drawCheckbox('3 Passport Photos', margin + 277, rowY);

  // Row 3: TC | Category Certificate
  y -= rowH;
  rowY = y - 15;
  drawCheckbox('TC (Transfer Certificate)', margin + 15, rowY);
  drawCheckbox('Category Certificate', margin + 277, rowY);

  y -= rowH;
  y -= 10;

  // --- SECTION 5: DECLARATION ---
  drawSectionHeader('DECLARATION');
  drawGridBox(2, rowH);

  // Row 1: Text declaration
  rowY = y - 14;
  page.drawText('I declare that the above information is true and correct.', {
    x: margin + 8,
    y: rowY,
    size: 8,
    font,
    color: darkGray,
  });

  // Row 2: Date / Place | Parent Signature
  y -= rowH;
  rowY = y - 15;
  drawField('Date:', margin + 8, rowY, 100);
  page.drawText('(DD/MM/YYYY)', { x: margin + 115, y: rowY, size: 6, font, color: rgb(0.5, 0.5, 0.5) });
  drawField('Place:', margin + 175, rowY, 130);
  
  page.drawLine({ start: { x: margin + 320, y: y }, end: { x: margin + 320, y: y - rowH }, color: borderGray, thickness: 0.75 });
  drawField('Parent Signature:', margin + 328, rowY, 188);

  y -= rowH;
  y -= 10;

  // --- SECTION 6: OFFICE USE ONLY ---
  drawSectionHeader('OFFICE USE ONLY');
  drawGridBox(2, rowH);

  // Row 1: Application No | Received
  rowY = y - 15;
  drawField('Application No:', margin + 8, rowY, 310);
  page.drawLine({ start: { x: margin + 320, y: y }, end: { x: margin + 320, y: y - rowH }, color: borderGray, thickness: 0.75 });
  drawField('Received:', margin + 328, rowY, 188);
  page.drawText('(DD/MM/YYYY)', { x: margin + 465, y: rowY, size: 6, font, color: rgb(0.5, 0.5, 0.5) });

  // Row 2: Status | Principal Signature
  y -= rowH;
  rowY = y - 15;
  page.drawText('Status:', { x: margin + 8, y: rowY, size: 8, font: fontBold, color: darkGray });
  let checkXStatus = margin + 50;
  checkXStatus = drawCheckbox('Approved', checkXStatus, rowY);
  drawCheckbox('Pending', checkXStatus, rowY);

  page.drawLine({ start: { x: margin + 320, y: y }, end: { x: margin + 320, y: y - rowH }, color: borderGray, thickness: 0.75 });
  drawField('Principal Signature:', margin + 328, rowY, 188);

  // Serialize to bytes and write
  const pdfBytes = await pdfDoc.save();
  const outputPath = path.resolve('public/admission-form.pdf');
  
  fs.writeFileSync(outputPath, pdfBytes);
  console.log(`Successfully generated Admission PDF at: ${outputPath}`);
}

generateAdmissionForm().catch((err) => {
  console.error('Failed to generate PDF:', err);
  process.exit(1);
});
