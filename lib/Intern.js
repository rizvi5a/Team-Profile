let Employee = import("./Employee")
class Intern extends Employee
{
  constructor(name,email,id,schoolName){
    super(name,id,email)
    this.schoolName = schoolName;
  }
  getRole() {
      return "Intern";
  }  
  getSchoolName(){
    return this.schoolName
  }
}
module.exports = Intern;
