const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'this is the base multiplier'
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        default: false,
        describe: 'this defines if you want to have the table printed to the console.'

    })
    .option('m', {
        alias: 'max',
        type: 'number',
        default: 10,
        describe: 'this is the max number of operations made by the program.'

    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'base has to be a number'
        }
        return true
    })
    .argv

module.exports = argv