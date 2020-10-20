import { isValidTodo, isValidProject } from '../utils';
import Todo from '../Todo';
import Project from '../Project';

const newProject = new Project('birth');
const newTodo = new Todo('push ups', 'Need to give my cardio a nice boost', '2020-12-16', 1);

test('isValidTodo function: it Should return TRUE if a VALID todo creation attempt is made.', () => {
  const validationResult = isValidTodo(newTodo);

  expect(validationResult).toBeTruthy();
  expect(validationResult).toBe(true);
});

test('isValidTodo function: it Should return FALSE if an INVALID todo creation attempt is made.', () => {
  const badTodo = new Todo('push ups', ' ', '2020-12-16', 2);
  const validationResult = isValidTodo(badTodo);

  expect(validationResult).toBeFalsy();
  expect(validationResult).toBe(false);
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