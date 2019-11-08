

// Require library
var xl = require('excel4node');

module.exports = {
    /**
     * Creates Excel file based on input data
     * @param {Object[]} data Rows of Object array
     * @param {string[]} columnHeaders
     * @param {string} fileName 
     * @param {string} filePath 
     */
    createExcel: function (data, columnHeaders = [], fileName = `cal_events_${new Date().getTime()}`, filePath = './output') {

        // Create a new instance of a Workbook class
        var workbook = new xl.Workbook();

        // Add Worksheets to the workbook
        var worksheet = workbook.addWorksheet('Eventos');

        var headerStyle = workbook.createStyle({
            font: {
                size: 12,
                bold: true,
            },
            numberFormat: '$#,##0.00; ($#,##0.00); -',
        });

        // Create a reusable style
        var rowsStyle = workbook.createStyle({
            font: {
                size: 12,
            },
            numberFormat: '$#,##0.00; ($#,##0.00); -',
        });

        // If columnHeaders are give, then use them, else infer them from the data source
        if (columnHeaders && columnHeaders.length)
            columnHeaders.forEach((title, j) => worksheet.cell(1, j + 1).string(`${title}`).style(rowsStyle));
        else
            Object.keys(data[0]).forEach((key, j) => worksheet.cell(1, j + 1).string(`${key}`).style(rowsStyle));


        data.forEach((elem, i) => {
            Object.keys(elem).forEach((key, j) => {
                worksheet.cell(i + 2, j + 1).string(`${elem[key]}`).style(rowsStyle);
            });
        });

        workbook.write(`${filePath}/${fileName}.xlsx`);
        console.log(`Excel created successfully. Location: '${filePath}/${fileName}.xlsx'.`);
    }
}