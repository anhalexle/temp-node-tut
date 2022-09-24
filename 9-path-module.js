const path = require('path')

console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'test.txt');

console.log(filePath)

// tìm phần tử cuối trong đường dẫn 
const base = path.basename(filePath);

console.log(base)
//nhân đường dẫn trực tiếp (absolute path)
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');

console.log(absolute)