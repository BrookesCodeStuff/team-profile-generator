const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const makePage = require('../src/page-template');
const { writeFile, copyFile } = require('../utils/generate-page');

// const mockData = [
//   {
//     name: 'Brooke',
//     id: '4',
//     email: 'brooke@company.com',
//     role: 'Manager',
//     officeNumber: '201',
//   },
//   {
//     name: 'Tom',
//     id: '3',
//     email: 'tom@company.com',
//     role: 'Engineer',
//     github: 'tomcodes',
//   },
//   {
//     name: 'Tom',
//     id: '3',
//     email: 'tom@company.com',
//     role: 'Engineer',
//     github: 'tomcodes',
//   },
//   {
//     name: 'Tom',
//     id: '3',
//     email: 'tom@company.com',
//     role: 'Engineer',
//     github: 'tomcodes',
//   },
//   {
//     name: 'Tom',
//     id: '3',
//     email: 'tom@company.com',
//     role: 'Engineer',
//     github: 'tomcodes',
//   },
//   {
//     name: 'Chris',
//     id: '45',
//     email: 'chris@school.edu',
//     role: 'Intern',
//     school: 'UCF',
//   },
//   {
//     name: 'Chris',
//     id: '45',
//     email: 'chris@school.edu',
//     role: 'Intern',
//     school: 'UCF',
//   },
// ];

function Team() {
  this.currentTeam = [];

  Team.prototype.buildTeam = function () {
    // Prompt for manager name, id, email, office
    inquirer
      .prompt([
        {
          type: 'text',
          name: 'name',
          message: "What is the team manager's name?",
        },
        {
          type: 'input',
          name: 'id',
          message: "What is the manager's employee ID?",
        },
        {
          type: 'text',
          name: 'email',
          message: "What is the manager's email address?",
        },
        {
          type: 'input',
          name: 'officeNumber',
          message: "What is the manager's office number?",
        },
      ])
      .then(({ name, id, email, role, officeNumber }) => {
        this.currentTeam.push(new Manager(name, id, email, role, officeNumber));

        this.addMember();
      });
  };
}

Team.prototype.addMember = function () {
  // Prompt for engineer, intern, or finish
  inquirer
    .prompt({
      type: 'list',
      name: 'choice',
      message: 'What would you like to do?',
      choices: ['Add engineer', 'Add intern', 'Finish'],
    })
    .then(({ choice }) => {
      if (choice === 'Add engineer') {
        // add engineer
        inquirer
          .prompt([
            {
              type: 'text',
              name: 'name',
              message: "What is the engineer's name?",
            },
            {
              type: 'input',
              name: 'id',
              message: "What is the engineer's employee ID?",
            },
            {
              type: 'text',
              name: 'email',
              message: "What is the engineer's email address?",
            },
            {
              type: 'input',
              name: 'github',
              message: "What is the engineer's GitHub username?",
            },
          ])
          .then(({ name, id, email, role, github }) => {
            this.currentTeam.push(new Engineer(name, id, email, role, github));

            this.addMember();
          });
      } else if (choice === 'Add intern') {
        // add intern
        inquirer
          .prompt([
            {
              type: 'text',
              name: 'name',
              message: "What is the intern's name?",
            },
            {
              type: 'input',
              name: 'id',
              message: "What is the intern's employee ID?",
            },
            {
              type: 'text',
              name: 'email',
              message: "What is the intern's email address?",
            },
            {
              type: 'input',
              name: 'school',
              message: 'Which school does the intern attend?',
            },
          ])
          .then(({ name, id, email, role, school }) => {
            this.currentTeam.push(new Intern(name, id, email, role, school));

            this.addMember();
          });
      } else {
        this.generatePage(this.currentTeam);
        return;
      }
    });
};

Team.prototype.generatePage = function (currentTeam) {
  const promise = Promise.resolve(makePage(currentTeam));

  promise
    .then((pageHTML) => {
      return writeFile(pageHTML);
    })
    .then((writeFileReponse) => {
      console.log(writeFileReponse);
      return copyFile();
    })
    .then((copyFileResponse) => {
      console.log(copyFileResponse);
    })
    .catch((err) => console.log(err));
};

module.exports = Team;
