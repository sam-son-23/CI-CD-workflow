const sum = require('../index')
test(' adds 2+3 equals 5',()=>{
    expect(sum(2,3)).toBe(5)
})

test(' adds negative numbers 2+3 equals 5',()=>{
    expect(sum(-2,-3)).toBe(-5)
})