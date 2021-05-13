const Employee= require('../lib/Intern');

test('Check a Intern is created', () => {

let Intern =new Employee ("name", "id", "name@email");

  expect(Intern.getName()).toMatch("name");
 //expect(employee.getId()).toMatch("Id");
});