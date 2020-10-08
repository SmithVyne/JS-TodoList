import Project from '../Project';
import { renderProjects, allProjects } from '../utils';

const createProject = () => {
  const projectTitle = document.querySelector('#projectTitle');
  const btnNewProject = document.querySelector('#btnNewProject');

  btnNewProject.addEventListener('click', () => {
    const newProject = new Project(projectTitle.value);

    const storedProjects = JSON.parse(localStorage.getItem('allProjects'));
    if (storedProjects) {
      storedProjects.push(newProject);
      const stringifiedProjects = JSON.stringify(storedProjects);
      localStorage.setItem('allProjects', stringifiedProjects);
    } else {
      allProjects.push(newProject);
    }

    renderProjects();
    projectTitle.value = '';
  });
};

export default createProject;
