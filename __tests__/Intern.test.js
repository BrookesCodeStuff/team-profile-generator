const Intern = require('../lib/Intern');

test('creates an intern', () => {
  const intern = new Intern('Jane');

  expect(intern.name).toEqual(expect.any(String));
});

test("gets intern's name", () => {
  const intern = new Intern('Jane');

  expect(intern.getName()).toBe('Jane');
});

test("gets an intern's id", () => {
  const intern = new Intern('Jane');

  intern.id = 1;

  expect(intern.getId()).toBeGreaterThanOrEqual(1);
});

test("gets an empoyee's email address", () => {
  const intern = new Intern('Jane');

  intern.email = 'jane@company.com';

  expect(intern.getEmail()).toEqual(expect.stringContaining('@'));
});

test("gets an intern's role", () => {
  const intern = new Intern('Jane');

  expect(intern.getRole()).toBe('Intern');
});

test("gets an intern's school", () => {
  const intern = new Intern('Jane');

  intern.school = 'UCF';

  expect(intern.getSchool()).toEqual(expect.any(String));
});
