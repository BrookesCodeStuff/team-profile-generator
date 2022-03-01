const Engineer = require('../lib/Engineer');

test('creates an engineer', () => {
  const engineer = new Engineer('Jane');

  expect(engineer.name).toEqual(expect.any(String));
});

test("gets engineer's name", () => {
  const engineer = new Engineer('Jane');

  expect(engineer.getName()).toBe('Jane');
});

test("gets an engineer's id", () => {
  const engineer = new Engineer('Jane');

  engineer.id = 1;

  expect(engineer.getId()).toBeGreaterThanOrEqual(1);
});

test("gets an empoyee's email address", () => {
  const engineer = new Engineer('Jane');

  engineer.email = 'jane@company.com';

  expect(engineer.getEmail()).toEqual(expect.stringContaining('@'));
});

test("gets an engineer's role", () => {
  const engineer = new Engineer('Jane');

  expect(engineer.role).toBe('Engineer');
});

test("gets an engineer's GitHub username", () => {
  const engineer = new Engineer('Jane');

  engineer.github = 'JaneCodes';

  expect(engineer.getGithub()).toEqual(expect.any(String));
});
