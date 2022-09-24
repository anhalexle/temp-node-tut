const { readFileSync, writeFileSync } = require('fs');
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first, second);
// nếu ko có thì tạo mới và ghi vào file vừa tạo nếu có rồi thì ghi đè
// thêm flag để thay thế việc ghi đè thành những cách khác ví dụ là { flag: a }: append (ghép kế tiếp nội dung cũ trong file)
writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`,
    { flag: 'a' }
);

console.log('done with this task')
console.log('starting the next one')