const { createFile } = require('./helpers/multiplicar')
const argv = require('./config/yarg')

console.clear()

console.log(argv);

createFile(argv.b, argv.l, argv.m)
    .then(fileName => console.log(fileName, 'created'))
    .catch(err => console.log(err))




