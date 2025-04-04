const fs = require("fs");
const path = require("path");
const PuppeteerHTMLPDF = require("puppeteer-html-pdf");

(async () => {
    const htmlPDF = new PuppeteerHTMLPDF();
    const options = {
        format: "A4",
        path: path.join(__dirname, "pdf/sample.pdf"),
    };
    htmlPDF.setOptions(options);

    const htmlPath = path.join(__dirname, "index.html");
    const content = fs.readFileSync(htmlPath, "utf8");

    try {
        await htmlPDF.create(content);
        console.log("PDF created successfully");
    } catch (error) {
        console.log("PuppeteerHTMLPDF error", error);
    }
})();
