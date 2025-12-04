const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generatePDF() {
    const htmlFile = path.join(__dirname, 'curriculum.html');
    const pdfFile = path.join(__dirname, 'curriculum.pdf');
    
    // Leer el contenido HTML
    const htmlContent = fs.readFileSync(htmlFile, 'utf8');
    
    console.log('Generando PDF...');
    
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Establecer el contenido HTML
    await page.setContent(htmlContent, {
        waitUntil: 'networkidle0'
    });
    
    // Generar PDF
    await page.pdf({
        path: pdfFile,
        format: 'Letter',
        margin: {
            top: '0.5in',
            right: '0.5in',
            bottom: '0.5in',
            left: '0.5in'
        },
        printBackground: true
    });
    
    await browser.close();
    
    console.log(`PDF generado exitosamente: ${pdfFile}`);
}

generatePDF().catch(console.error);



