const Employee= require('../lib/Engineer');

test('Check an Engineer is created', () => {

let Engineer =new Employee ("name", "id", "name@email");

  expect(Engineer.getName()).toMatch("name");
 //expect(employee.getId()).toMatch("Id");
});