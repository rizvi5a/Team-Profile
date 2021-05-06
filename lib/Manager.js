let Employee = import("./Employee")
class Manger extends Employee
{
  constructor(name,email,id,officeNumber){
    super(name,id,email)
    this.officeNumber = officeNumber;
  }
  getRole() {
      return "Manger";
  }  
  getOfficeNumber(){
    return this.officeNumber
  }
}
module.exports = Manger;
