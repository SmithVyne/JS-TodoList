import { format } from 'date-fns';
import displayProjects from './displayProject';

const dummyProject = {
  name: 'Do dummy',
  list:
  [
    {
      title: 'Do 20 Squats before breakfast',
      description: 'I need squats to .... Lorem ipsim jseft yug huger serdagh montergh dergrats',
      dueDate: format(new Date(2020, 8, 11), 'yyyy/MM/dd'),
      priority: 2,
    },
    {
      title: 'Do 20 pushups after breakfast',
      description: 'Pushups are good for strength and cardio .... Lorem ipsim jseft yug huger serdagh montergh dergrats',
      dueDate: format(new Date(2020, 9, 11), 'yyyy/MM/dd'),
      priority: 1,
    },
    {
      title: 'Do planks for 3 min after work',
      description: 'Planks are great for the circuit .... Lorem ipsim jseft yug huger serdagh montergh dergrats',
      dueDate: format(new Date(2020, 10, 11), 'yyyy/MM/dd'),
      priority: 3,
    },
  ],
};

const allProjects = [dummyProject];

const renderProjects = () => {
  const projects = JSON.parse(localStorage.getItem('allProjects'));

  if (projects) {
    displayProjects(projects);
  } else {
    displayProjects(allProjects);
    const stringifiedProjects = JSON.stringify(allProjects);
    localStorage.setItem('allProjects', stringifiedProjects);
  }
};

const isValidTodo = todo => {
  const errors = [];

  if (todo.title === ('' || ' ')) {
    errors.push('Title is Required');
  } else if (todo.description === ('' || ' ')) {
    errors.push('Description is Required');
  } else if (todo.dueDate === ('' || ' ')) {
    errors.push('Due date is Required');
  } else if (todo.priority === ('' || ' ')) {
    errors.push('Priority is Required');
  }

  return errors.length <= 0;
};

const isValidProject = proj => {
  const errors = [];

  if (!proj.name) {
    errors.push('Project Name is Required');
  }

  return errors.length <= 0;
};

export {
  allProjects, renderProjects,
  isValidTodo, isValidProject,
};