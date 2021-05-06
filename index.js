const inquirer =require ("inquirer");
const fs = require ("fs");
const Employee = require ('./lib/Employee');



//questions
//html page

var inquirer_array = [
{
    name: " name",
    message: " What is Manger's  Name"
},

{
    name: " id",
    message: " What is Manger's  ID"
},
{
    name: "email",
    message: " What is Manger's email"
},
{
name: "number",
message: " What is Manger's office number"
},

]
inquirer
  .prompt(inquirer_array)
  .then(answers => {
    // Use user feedback for... whatever!!
    console.log(answers)

    let employee = new Employee (answers.name, answers.id, answers.email)
    var html =generateHTML(employee);
    fsActions(html);
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      console.log(error)
    }
  });


  function fsActions (html) {
    fs.appendFile("index.html", html, () => {
      console.log("file created");
    })
  }
  function generateHTML(employee) {
      var html_as_string = "<ul><li>"+employee.getRole()+"</li><li>"+
      employee.getName()+"</li><li>" + employee.getEamil()+"</li></ul>"
// //new
// var html_as_string = "<ul><li>"+employee.getName()+"</li><li>"+
//      +employee.getId()+"</li><li>" +employee.getEmail()+"</li></ul>"
    return html_as_string
   }