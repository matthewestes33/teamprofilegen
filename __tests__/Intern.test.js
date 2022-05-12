const Intern = require('../lib/Intern');

//can set school
test("Can set school on Intern object", () => {
    const intern = new Intern('name', 'id', 'email', 'school');

    expect(intern.school).toBe('school');
})

//can get school via method
test("Can get school via getSchool method", () => {
    const intern = new Intern('name', 'id', 'email', 'school');

    expect(intern.getSchool()).toBe('school');
})

//can get employee role (Intern)
test("Can get employee role of Intern", () => {
    const intern = new Intern('name', 'id', 'email', 'school');

    expect(intern.getRole()).toBe('Intern');
})