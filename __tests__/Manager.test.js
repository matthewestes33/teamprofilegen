const Manager = require('../lib/Manager');

//can set office number
test("Can set office number on Manager object", () => {
    const manager = new Manager('name', 'id', 'email', 'officeNumber');

    expect(manager.officeNumber).toBe('officeNumber');
})

//can get office number via method
test("Can get office number via getOfficeNumber method", () => {
    const manager = new Manager('name', 'id', 'email', 'officeNumber');

    expect(manager.getOfficeNumber()).toBe('officeNumber');
})

//can get employee role (Manager)
test("Can get employee role of Manager", () => {
    const manager = new Manager('name', 'id', 'email', 'officeNumber');

    expect(manager.getRole()).toBe('Manager');
})