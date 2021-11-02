const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlrender");

const questions = [
  {
    type: "list",
    name: "role",
    message: "What is team member's role?",
    choices: ["Manager", "Engineer", "Intern"],
  },
  {
    type: "input",
    name: "name",
    message: "What is the team member's name?",
  },

  {
    type: "input",
    name: "id",
    message: "What the team member's id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the team member's email?",
  },
];

const team = [];

const generateTeam = () => {
  inquirer
    .prompt(questions)
    .then((A1) => {
      inquirer
        .prompt([
          {
            when: () => A1.role === "Manager",
            type: "input",
            message: "What is their office number",
            name: "officeNumber",
          },
          {
            when: () => A1.role === "Engineer",

            type: "input",
            message: "What is the GitHub Username?",
            name: "github",
          },

          {
            when: () => A1.role === "Intern",

            type: "input",
            message: "What is the school's name?",
            name: "school",
          },

          {
            type: "confirm",
            message: "Would you like to add another team member?",
            name: "addMember",
          },
        ])

        .then((A2) => {
          if (A1.role === "Manager") {
            const manager = new Manager(
              A1.name,
              A1.id,
              A1.email,
              A2.officeNumber
            );
            team.push(manager);
          }

          if (A1.role === "Engineer") {
            const engineer = new Engineer(A1.name, A1.id, A1.email, A2.github);
            team.push(engineer);
          }

          if (A1.role === "Intern") {
            const intern = new Intern(A1.name, A1.id, A1.email, A2.school);
            team.push(intern);
          }
          if (A2.addMember) {
            generateTeam();
          } else {
            team.forEach((team) => {
              console.log(team);
            });
            fs.writeFile(outputPath, render(team), (err) => {
              if (err) {
                throw err;
              }
              console.log("Success, team HTML is created!");
            });
          }
        });
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
};

generateTeam();
