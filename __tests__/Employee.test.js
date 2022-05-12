const Employee = require('../lib/Employee');

test("Will make new Employee object", () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe('object');
})

test("Will conform name to employee object", () => {
    const employeeName = "Data";
    const employee = new Employee("Data");
    expect(employee.name).toBe(employeeName);
})
//How do I write more tests?
test("Will get employeeName with getName method", () => {
    const employeeName = "Data";
    const employee = new Employee("Data");
    expect(employee.getName()).toBe(employeeName);
})