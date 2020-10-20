import Todo from '../Todo'
import { isValidTodo } from '../utils'
import renderPriorityText from '../renderPriorityText'

const newTodo = new Todo('push ups', 'Need to give my cardio a nice boost', '2020-12-16', 1);

test('Should be able to create a new Todo instance', () => {
  expect(newTodo).toBeDefined();
  expect(newTodo).toBeTruthy();
  expect(newTodo).toEqual({
    title: 'push ups',
    description: 'Need to give my cardio a nice boost',
    dueDate: '2020-12-16',
    priority: 1
  });
});

test('renderPriorityText: it Should be able to display the correct priority text', () => {
  const high = renderPriorityText(3);
  const medium = renderPriorityText(2);
  const low = renderPriorityText(1);

  expect([high, medium, low]).toBeDefined();
  expect(high).toBe('High');
});

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