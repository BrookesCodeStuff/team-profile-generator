const Manager = require('../lib/Manager');

test('creates a manager', () => {
  const manager = new Manager('Jane');

  expect(manager.name).toEqual(expect.any(String));
});

test("gets manager's name", () => {
  const manager = new Manager('Jane');

  expect(manager.getName()).toBe('Jane');
});

test("gets an manager's id", () => {
  const manager = new Manager('Jane');

  manager.id = 1;

  expect(manager.getId()).toBeGreaterThanOrEqual(1);
});

test("gets a manager's email address", () => {
  const manager = new Manager('Jane');

  manager.email = 'jane@company.com';

  expect(manager.getEmail()).toEqual(expect.stringContaining('@'));
});

test("gets a manager's role", () => {
  const manager = new Manager('Jane');

  expect(manager.getRole()).toBe('Manager');
});

test("gets a manager's office number", () => {
  const manager = new Manager('Jane');

  manager.officeNumber = 2;

  expect(manager.officeNumber).toBeGreaterThanOrEqual(1);
});
