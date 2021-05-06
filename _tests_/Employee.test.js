const Employee= require('../lib/Employee');

test('Check an employee is created', () => {

let employee =new Employee ("name", "id", "name@email");

  expect(employee.getName()).toMatch("name");
 //expect(employee.getId()).toMatch("Id");
});