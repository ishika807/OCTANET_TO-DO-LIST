const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('tasks');

addTaskButton.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskElement = document.createElement('li');
    taskElement.className = 'task';
    taskElement.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-task">Delete</button>
    `;

    taskList.appendChild(taskElement);
    taskInput.value = '';

    const deleteButton = taskElement.querySelector('.delete-task');
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskElement);
    });
}
