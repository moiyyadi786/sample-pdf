var jsPDF = require("jspdf");
var doc = new jsPDF();
doc.text(20, 20, 'pdf is still working \n check last time \nand one more time\nlast time :-)\nFinal confirm');
var output = doc.output("arraybuffer");
var fs = require('fs');
fs.writeFile('file.pdf', new Buffer(output), function(err) {
    if (err) throw 'error writing file: ' + err;
});

