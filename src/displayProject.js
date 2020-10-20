import renderPriorityText from './renderPriorityText';
import '../css/styles.css';

const theTodos = (todosAccord, todo, todoIndex, projIndex) => {
  todosAccord.innerHTML += `
  <div class="card">
    <div class="card-header">
      <h2 class="mb-0">
        <div class="btn btn-link btn-block text-left todoHeader" type="button" data-toggle="collapse" data-target="#todo${todoIndex}">
          <div>${todo.title}</div>
          <div>${todo.dueDate}</div>
        </div>
      </h2>
    </div>

    <div id="todo${todoIndex}" class="collapse" data-parent="#todos${projIndex}">
      <div class="card-body">
        <p>Description: ${todo.description}</p>
        <p>Priority: ${renderPriorityText(todo.priority)}</p>
        <button class="btn btn-warning editBtn" id="${projIndex}${todoIndex}" data-toggle="modal" data-target="#editTodoModal${projIndex}${todoIndex}">Edit</button>


          <div class="modal fade" id="editTodoModal${projIndex}${todoIndex}" tabindex="-1">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Edit TODO</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <form class="modal-body">
                  <div class="form-group">
                    <input type="text" class="form-control" id="editTitle${projIndex}${todoIndex}" placeholder="Enter Todo Title" name="todoTitle">
                    <input type="text" class="form-control my-1" id="editDesc${projIndex}${todoIndex}" placeholder="Enter Description" name="description">
                    <input type="date" class="form-control" id="editDate${projIndex}${todoIndex}" placeholder="select Due date" name="dueDate">
                    <select class="custom-select custom-select-md my-1 form-control" id="editPriority${projIndex}${todoIndex}" name="priority">
                      <option selected>Select Priority</option>
                      <option value="1">Low</option>
                      <option value="2">Medium</option>
                      <option value="3">High</option>
                    </select>
                  </div>
                </form>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary btnEditTodo" id="${projIndex}${todoIndex}u">Update Todo</button>
                </div>
              </div>
            </div>
          </div>


        <button class="btn btn-danger dltBtn" id="${projIndex}${todoIndex}D">Delete</button>
      </div>
    </div>
  </div>
  `;
};

const loopTodos = (todos, projIndex) => {
  const todosAccord = document.querySelector(`#todos${projIndex}`);

  const sortedTodo = todos.sort((a, b) => b.priority - a.priority);

  sortedTodo.forEach((todo, todoIndex) => {
    theTodos(todosAccord, todo, todoIndex, projIndex);
  });
};

const projectCard = (accordion, project, projIndex) => {
  const todos = project.list;

  accordion.innerHTML += `
    <div class="card">
      <div class="card-header" id="headingOne">
        <h2 class="mb-0">
          <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${projIndex}">
            ${project.name} 
          </button>
        </h2>
      </div>

      <div id="collapse${projIndex}" class="collapse ${projIndex === 0 ? 'show' : ''}" data-parent="#accordionExample">
        <div class="card-body">

          <!--Todo Starts here -->
          <div class="accordion ml-auto mr-auto" id="todos${projIndex}" style="width: 90%;">
            
          </div>
            
        </div>
        <div class="text-center mb-3">
          <button class="btn btn-primary" data-toggle="modal" data-target="#newTodoModal${projIndex}">Add Todo</button>
          
          <div class="modal fade" id="newTodoModal${projIndex}" tabindex="-1">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">NEW TODO</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <form class="modal-body">
                  <div class="form-group">
                    <input type="text" class="form-control" id="todoTitle${projIndex}" placeholder="Enter Todo Title" name="todoTitle">
                    <input type="text" class="form-control my-1" id="description${projIndex}" placeholder="Enter Description" name="description">
                    <input type="date" class="form-control" id="dueDate${projIndex}" placeholder="select Due date" name="dueDate">
                    <select class="custom-select custom-select-md my-1 form-control" id="priority${projIndex}" name="priority">
                      <option selected>Select Priority</option>
                      <option value="1">Low</option>
                      <option value="2">Medium</option>
                      <option value="3">High</option>
                    </select>
                  </div>
                </form>

                <div class="modal-footer">
                  <button type="button" class="btn btn-primary btnNewTodo">Create Todo</button>
                </div>
              </div>
            </div>
          </div> 

        </div>
      </div>
    </div>
    `;

  loopTodos(todos, projIndex);
};

const displayProjects = (projects) => {
  const accordion = document.querySelector('#accordionExample');
  accordion.innerHTML = '';

  projects.forEach((project, index) => {
    projectCard(accordion, project, index);
  });
};

export default displayProjects;