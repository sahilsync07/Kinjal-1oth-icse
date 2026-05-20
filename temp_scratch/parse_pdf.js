const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const pdfPath = path.join(__dirname, '..', 'English', 'articles.pdf');

let dataBuffer = fs.readFileSync(pdfPath);

pdf(dataBuffer).then(function(data) {
    console.log("Total Pages:", data.numpages);
    console.log("Info:", data.info);
    console.log("Metadata:", data.metadata);
}).catch(err => {
    console.error("Error parsing PDF:", err);
});
