import Project from '../Project';

test('Should be able to create a new project instance', () => {
  const newProject = new Project('birth');

  expect(newProject).toBeDefined();
  expect(newProject).toBeTruthy();
  expect(newProject).toEqual({ name: 'birth', list: [] });
});
