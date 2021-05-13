const Employee= require('../lib/Manager');

test('Check a Manager is created', () => {

let Manager =new Employee ("name", "id", "name@email");

  expect(Manager.getName()).toMatch("name");
 //expect(employee.getId()).toMatch("Id");
});