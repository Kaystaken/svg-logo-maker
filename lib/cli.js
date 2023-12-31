const inquirer = require('inquirer');
const { createLogo } = require('./createLogo.js');
const { writeFile } = require('fs').promises;

// Array of questions for user input
const questions = [
{
  type: 'list',
  message: 'Choose one shape:',
  name: 'shape',
  choices: ['circle', 'square', 'triangle'],
},
{
  type: 'input',
  message: 'Select a shape colour (by color name or a hexadecimal number):',
  name: 'shapeColor1',
},
{
  type: 'confirm',
  message: 'Do you want the background for your logo to be gradient?:',
  name: 'gradientBG',
},
{
  type: 'input',
  message: 'Add another color for gradient background:',
  name: 'shapeColor2',
  when: (answers) => answers.gradientBG,
},
{
  type: 'input',
  message: '3 char max:',
  name: 'text',
},
{
  type: 'input',
  message: 'Select text colour (by colour name or a hexadecimal number):',
  name: 'textColor',
},
]

class CLI {
  constructor() {
    this.data = []
  }

  //Run the CLI app
  run() {
    return inquirer.prompt(questions)
      .then((responses) => {
          console.log('responses:', responses);

          // Create logo to write it to a file
          return writeFile('./demo/logo.svg', createLogo(responses));
      })
      .then(() => console.log('Check the demo folder for your logo'))
      .catch((error) => {
        console.log('Error:', error);
      })
  }
}

module.exports = CLI