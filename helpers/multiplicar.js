const fs = require('fs')
const colors = require('colors')


const createFile = async (base = 5, list = false, max = 10) => {
    try {

        let output = ''
        let consoleOutput = ''
        for (let i = 1; i <= max; i++) {
            const result = i * base
            output += (`${base} x ${i} = ${result}\n`)
            consoleOutput += `${colors.green(base)} x ${colors.blue(i)} ${colors.rainbow('equals')} ${colors.brightMagenta(result)} \n`
        }

        if (list) {
            console.log('==================='.green);
            console.log(`${colors.green(base)} table`);
            console.log('==================='.green);
            console.log(consoleOutput);

        }
        fs.writeFileSync(`./output/tabla${base}.txt`, output)

        return (`${base}-table.txt`)


    } catch (error) {
        throw error
    }



}

module.exports = {
    createFile,
}