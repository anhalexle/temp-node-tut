const EventEmitter = require('events');

const customEmitter = new EventEmitter();


//on -listen for an events
//emit - emit an event

// customEmitter.on('response', () => {
//     console.log(`data received`);
// })

// customEmitter.emit('response')

//emit phải được thực hiện sau khi đã on vì nếu emit trước thì sẽ ko nhận được dữ liệu gì hết (synchronously)

customEmitter.on('response', (name, id) => {
    console.log(`data received ${name} with id:${id}`);
})
customEmitter.on('response', () => {
    console.log(`some other logic here`)
})

customEmitter.emit('response', 'john', 34)