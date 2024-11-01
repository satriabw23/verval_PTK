'use strict';

const fonts = {
    Roboto: {
        normal: 'common/fonts/Roboto-Regular.ttf',
        bold: 'common/fonts/Roboto-Medium.ttf',
        italics: 'common/fonts/Roboto-Italic.ttf',
        bolditalics: 'common/fonts/Roboto-MediumItalic.ttf'
    },
    TimesNewRoman: {
        normal: 'common/fonts/times-new-roman.ttf',
        bold: 'common/fonts/times-new-roman-bold.ttf',
        italics: 'common/fonts/times-new-roman-italic.ttf',
        bolditalics: 'common/fonts/times-new-roman-bold-italic.ttf'
    }, 
    BookmanOldStyle: {
        normal: 'common/fonts/BOOKOS.ttf',
        bold: 'common/fonts/BOOKOSB.ttf',
        italics: 'common/fonts/BOOKOSI.ttf',
        bolditalics: 'common/fonts/BOOKOSBI.ttf'
    },
    TrajanPro: {
        normal: 'common/fonts/trajan-pro-regular.ttf',
        bold: 'common/fonts/trajan-pro-bold.ttf',
    }
};

const PdfPrinter = require('pdfmake');
const printer = new PdfPrinter(fonts);
const fs = require('fs');

const generatePdfWithoutUpload = (docDefinition, options, fileName) => {

    const pathFile = `data/${fileName}.pdf`;
    const pdfDoc = printer.createPdfKitDocument(docDefinition, options);
    pdfDoc.pipe(fs.createWriteStream(pathFile));
    pdfDoc.end();
}

const commonPdf = {
    generatePdfWithoutUpload
}

module.exports = commonPdf

