const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const questions = {
    q1: "What is your managers name?",
    q2: "What is your managers ID?",
    q3: "What is your managers Email?",
    q4: "What is your managers office number?",
    q5: "Which type of team member would you like to add?",
    q6: "What is your engineers name?",
    q7: "What is your engineers ID?",
    q8: "What is your engineers Email?",
    q9: "What is your engineers github username?",
    q10: "What is your interns name?",
    q11: "What is your interns ID?",
    q12: "What is your interns email?",
    q13: "What is your interns school?",
};

inquirer
    .prompt([
        {
            type: "input",
            message: questions.q1,
            name: "name"

        },
        {
            type: "input",
            message: questions.q2,
            name: "id"
        },
        {
            type: "input",
            message: questions.q3,
            name: "email"
        },
        {
            type: "input",
            message: questions.q4,
            name: "office"
        },
    ]).then(function (data) {
        console.log(data);
    });
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
