const Engineer = require('../lib/Engineer');

//can set GitHub profile
test("Can set GibHub profile on Engineer object", () => {
    const engineer = new Engineer('name', 'id', 'email', 'github');

    expect(engineer.github).toBe('github');
})

//can get GitHub profile via method
test("Can get GitHub profile via getGithub method", () => {
    const engineer = new Engineer('name', 'id', 'email', 'github');

    expect(engineer.getGithub()).toBe('github');
})

//can get employee role (Engineer)
test("Can get employee role of Engineer", () => {
    const engineer = new Engineer('name', 'id', 'email', 'github');

    expect(engineer.getRole()).toBe('Engineer');
})