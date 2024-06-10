document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
    const taskName = document.getElementById('task-name').value;
    const taskCategory = document.getElementById('task-category').value;
    const taskDueDate = document.getElementById('task-due-date').value;
    const taskPriority = document.getElementById('task-priority').value;

    if (!taskName) {
        alert('Please enter a task name.');
        return;
    }

    const taskList = document.getElementById('task-list');

    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const taskDetails = document.createElement('span');
    taskDetails.innerHTML = `
        <strong>${taskName}</strong> - 
        ${taskCategory} - 
        ${taskDueDate} - 
        ${taskPriority.charAt(0).toUpperCase() + taskPriority.slice(1)}
    `;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', () => {
        taskDetails.classList.toggle('complete');
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(taskDetails);
    taskItem.appendChild(completeButton);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);

    document.getElementById('task-name').value = '';
    document.getElementById('task-category').value = '';
    document.getElementById('task-due-date').value = '';
    document.getElementById('task-priority').value = 'low';
}
