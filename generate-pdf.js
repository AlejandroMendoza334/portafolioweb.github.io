const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generatePDFFromFile(htmlFile, pdfFile) {
    const htmlContent = fs.readFileSync(htmlFile, 'utf8');

    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    await page.setContent(htmlContent, {
        waitUntil: 'networkidle0'
    });

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

async function generatePDFs() {
    console.log('Generando PDFs...');

    await generatePDFFromFile(
        path.join(__dirname, 'curriculum.html'),
        path.join(__dirname, 'curriculum.pdf')
    );

    await generatePDFFromFile(
        path.join(__dirname, 'curriculum-es.html'),
        path.join(__dirname, 'curriculum-es.pdf')
    );
}

generatePDFs().catch(console.error);
