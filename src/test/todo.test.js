import Todo from '../Todo';

const newTodo = new Todo('push ups', 'Need to give my cardio a nice boost', '2020-12-16', 1);

test('Should be able to create a new Todo instance', () => {
  expect(newTodo).toBeDefined();
  expect(newTodo).toBeTruthy();
  expect(newTodo).toEqual({
    title: 'push ups',
    description: 'Need to give my cardio a nice boost',
    dueDate: '2020-12-16',
    priority: 1,
  });
});
