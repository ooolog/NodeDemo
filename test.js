/// <reference path="typings/tsd.d.ts" />
function WriteFile() {
    var fs = require('fs');
    fs.writeFile('test2.txt', 'Hello Node', function(err) {
        if (err) throw err;
        console.log('Saved successfully');
    });
}
