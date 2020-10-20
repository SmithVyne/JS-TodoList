import { format } from 'date-fns';
import Todo from '../Todo';
import { renderProjects, isValidTodo } from '../utils';

const newTodoUtils = (index) => {
  const allProjects = JSON.parse(localStorage.getItem('allProjects'));

  const todoTitle = document.querySelector(`#todoTitle${index}`);
  const description = document.querySelector(`#description${index}`);
  const dueDate = document.querySelector(`#dueDate${index}`);
  const priority = document.querySelector(`#priority${index}`);

  return [allProjects, todoTitle, description, dueDate, priority];
};

const createTodo = () => {
  const btnNewTodoArr = document.querySelectorAll('.btnNewTodo');

  btnNewTodoArr.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const [allProjects, todoTitle, description, dueDate, priority] = newTodoUtils(index);

      let date = dueDate.value.split('-');
      date = date.map((item) => parseInt(item, 10));
      const formatedDate = format(new Date(date[0], date[1], date[2]), 'yyyy/MM/dd');
      const prInt = parseInt(priority.value, 10);

      const newTodo = new Todo(todoTitle.value, description.value, formatedDate, prInt);

      if (isValidTodo(newTodo)) {
        allProjects[index].list.push(newTodo);
      }

      localStorage.setItem('allProjects', JSON.stringify(allProjects));

      renderProjects();
      location.reload();
    });
  });
};

export default createTodo;
