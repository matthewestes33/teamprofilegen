//In addition to Employee's properties and methods, Engineer will also have the following:
//github—GitHub username, getGithub(), getRole()—overridden to return 'Engineer'

const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getRole(){
        return 'Engineer';
    }
    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;