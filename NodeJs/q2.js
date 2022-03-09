var fs =require('fs');
var readMe = fs.readFileSync('text.txt', 'utf8');
console.log(readMe)
