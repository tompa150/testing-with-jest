const stack = require('../src/stack.js');

test("Add to stack and then remove all from stack but the last element", () => {
    stack.push(66)
    stack.push("Grey")
    stack.push("66")
    stack.push(66)
    stack.pop(66)
    stack.pop("66")
    stack.pop("Grey")
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(65);
})