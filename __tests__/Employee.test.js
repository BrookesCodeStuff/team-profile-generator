const Employee = require('../lib/Employee');

test('creates an employee', () => {
  const employee = new Employee('Jane');

  expect(employee.name).toEqual(expect.any(String));
});

test("gets employee's name", () => {
  const employee = new Employee('Jane');

  expect(employee.getName()).toBe('Jane');
});

test("gets an employee's id", () => {
  const employee = new Employee('Jane');

  employee.id = 1;

  expect(employee.getId()).toBeGreaterThanOrEqual(1);
});

test("gets an empoyee's email address", () => {
  const employee = new Employee('Jane');

  employee.email = 'jane@company.com';

  expect(employee.getEmail()).toEqual(expect.stringContaining('@'));
});

test("gets an employee's role", () => {
  const employee = new Employee('Jane');

  expect(employee.getRole()).toBe('Employee');
});
