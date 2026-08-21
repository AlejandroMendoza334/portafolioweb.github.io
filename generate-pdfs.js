const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const os = require('os');

async function generatePDFFromHtml(htmlContent, outputPath) {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: path.join(
      os.homedir(),
      '.cache',
      'puppeteer',
      'chrome',
      'win64-121.0.6167.85',
      'chrome-win64',
      'chrome.exe'
    ),
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
  await page.pdf({
    path: outputPath,
    format: 'Letter',
    margin: { top: '0.5in', right: '0.5in', bottom: '0.5in', left: '0.5in' },
    printBackground: true
  });
  await browser.close();
}

async function generateBoth() {
  const htmlFile = path.join(__dirname, 'curriculum.html');
  const htmlContent = fs.readFileSync(htmlFile, 'utf8');

  console.log('Generando curriculum.pdf (inglés)...');
  await generatePDFFromHtml(htmlContent, path.join(__dirname, 'curriculum.pdf'));
  console.log('curriculum.pdf generado.');

  console.log('Generando curriculum-es.pdf (español, títulos traducidos)...');
  // Traduce los títulos más comunes para crear la versión en español
  let esContent = htmlContent
    .replace(/<h2>Skills<\/h2>/g, '<h2>Habilidades</h2>')
    .replace(/<h2>Experience<\/h2>/g, '<h2>Experiencia</h2>')
    .replace(/<h2>Projects<\/h2>/g, '<h2>Proyectos</h2>')
    .replace(/<h2>Education<\/h2>/g, '<h2>Educación</h2>')
    .replace(/Present/g, 'Presente');

  await generatePDFFromHtml(esContent, path.join(__dirname, 'curriculum-es.pdf'));
  console.log('curriculum-es.pdf generado.');
}

generateBoth().catch(err => {
  console.error('Error generando PDFs:', err);
  process.exit(1);
});
