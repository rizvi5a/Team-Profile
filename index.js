const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require ('./lib/Manager');
const Engineer = require ('./lib/Engineer');
const Intern = require ('./lib/Intern');

// let managerList = []
// let engineerList = []
// let internList = []

var htmlCode = `
    <DOTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous">
<link rel="stylesheet" href="./style.css"> 
</head>
<body>
   
    <div class="container p-0">
        <nav class="bg-danger text-center>
        <a href="#" class="btn btn-primary float-right mt-n1"><i class="fas fa-plus"></i> My Team</a>
        <h1 class="h3 mb-3">Project # 20-3456-82 </h1>
        </nav>
        <div class="row d-flex justify-content-evenly">
        `



function startMenu() {
  inquirer.prompt([
    {
      type: "list",
      choices: ["Add Manager", "Add Engineer", "Add Intern", "Exit App"],
      message: "Choose and options?",
      name: "userSelection"
    }
  ]).then(function (response) {
    switch (response.userSelection) {
      case "Add Manager":
        addManager();
        break;
      case "Add Engineer":
        addEngineer();
        break;
      case "Add Intern":
        addIntern();
        break;
      default:
        exitapp()
    }
  })

}


function addManager() {
  var inquirer_array = [
    {
      name: "name",
      message: " What is Manger's  Name"
    },

    {
      name: "id",
      message: " What is Manager's  ID"
    },
    {
      name: "email",
      message: " What is Manager's email"
    },
    {
      name: "number",
      message: " What is Manager's office number"
    }

  ]

  inquirer.prompt(inquirer_array).then(
    function (answers) {
      console.log(answers)
      let myManager = new Manager(answers.name, answers.id, answers.email,answers.number)
     
      var role = "Manager"

      var html = generateHTML("Manager", myManager)
      htmlCode += html
      startMenu()
    })
}
function addEngineer() {
  var inquirer_array = [
    {
      name: "name",
      message: " What is Engineer's  Name"
    },

    {
      name: "id",
      message: " What is Engineer's  ID"
    },
    {
      name: "email",
      message: " What is Engineers's email"
    },
    {
       name:"github",
       message:"Enter Github username?"
    }
  ]

  inquirer.prompt(inquirer_array).then(
    function (answers) {
      console.log(answers)
      let myEngineer = new Engineer(answers.name, answers.id, answers.email,answers.github)
      
       var role = "Engineer"
      var html = generateHTML("Engineer", myEngineer)
      htmlCode += html
      startMenu()
    })
}
function addIntern() {
  var inquirer_array = [
    {
      name: "name",
      message: " What is Intern's  Name"
    },

    {
      name: "id",
      message: " What is Intern's  ID"
    },
    {
      name: "email",
      message: " What is Intern's email"
    },
    {
      name:"school",
      message:"Enter school anme?"
    }

  ]

  inquirer.prompt(inquirer_array).then(
    function (answers) {
      console.log(answers)
      let myIntern = new Intern(answers.name, answers.id, answers.email,answers.school)
      var role = "Intern"
      var html = generateHTML("Intern", myIntern)
      htmlCode += html
      startMenu()
    })
}
startMenu()




function fsActions() {
  htmlCode += `</div>
  </div>
  </body></html>`
  fs.writeFileSync("index.html", htmlCode, () => {
    console.log("file created");
  })
}


function generateHTML(role, Employee) {
  //var html_as_string = "<ul><li>"+Employee.getRole()+"</li><li>"+
  //Employee.getName()+"</li><li>" +Employee.getId() +"</li><li>"+ Employee.getEamil()+"</li></ul>"
  
  let htmlCode = `
        
                <div class="card bg-secondary" style="width: 18rem;">
    
                    <div class="card-header px-2 pt-2">
                        <h5 class="card-title mb-0">${Employee.getName()}</h5>
                        <div class="badge bg-success my-2">${role}</div>
                    </div>
                    <div class="card-body px-2 pt-2 ">

                          <ul>
                          <li> Id :  ${Employee.getId()}</li>
                          <li> Email: <a href="mailto:${Employee.getEmail()}">${Employee.getEmail()}</a></li>`

                 console.log(Employee.getRole())

                if (role == "Engineer") {
                  htmlCode += `
                          <li> Github: <a href="https://github.com/${Employee.getGithub()}">${Employee.getGithub()}</a></li>
                          </ul>
                      </div>
                      </div>`

                } else if (role== "Manager") {
                  htmlCode += `
                        <li> Office #: ${Employee.getOfficeNumber()}</li>
                        </ul>
                    </div>
                    </div>`

                } else {
                  htmlCode += `
                        <li> School: ${Employee.getSchoolName()}</li>
                        </ul>
                    </div>
                    </div>`

                }



  return htmlCode




}

function exitapp() {

  fsActions()
  process.exit(0)
}




