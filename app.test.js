const add = require('./app');

test('Add 10, 20 and returns 30', ()=>{
    expect(add(10,20)).toBe(30)
})