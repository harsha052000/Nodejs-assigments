const fs = require("fs");

var file = fs.readFileSync("q5.txt", "utf8");
var arr = file.split('\n');

var count = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i].includes("john")) {
        count += 1;
    }
}
console.log(count);