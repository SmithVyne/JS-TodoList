import Project from '../Project';
import { isValidProject } from '../utils';

const newProject = new Project('birth');

test('Should be able to create a new project instance', () => {
  expect(newProject).toBeDefined();
  expect(newProject).toBeTruthy();
  expect(newProject).toEqual({ name: 'birth', list: [] });
});

test('isValidProject function: it Should return TRUE if a VALID Project creation attempt is made.', () => {
  const validationResult = isValidProject(newProject);

  expect(validationResult).toBeTruthy();
  expect(validationResult).toBe(true);
});

test('isValidProject function: it Should return FALSE if an INVALID Project creation attempt is made.', () => {
  const badProject = new Project('');
  const validationResult = isValidProject(badProject);

  expect(validationResult).toBeFalsy();
  expect(validationResult).toBe(false);
});