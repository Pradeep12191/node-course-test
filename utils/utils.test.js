var utils = require('./utils')

it('Should add two numbers', () => {
    var res = utils.add(22, 33)

    if (res !== 55) {
        throw (`Expected is 55, but got ${res}`)
    }
})

it('Should square a number', () => {
    var res = utils.square(2);

    if (res !== 4) {
        throw (`Expected is 4, but got ${res}`)
    }
})