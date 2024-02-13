'use strict'


const addTaskButton = document.querySelector('.plus-button');
const taskBlock = document.getElementById('body');

function addTask(parent, html) {
  const task = document.createElement('div');
  task.innerHTML = html.trim();
  parent.appendChild(task);
}

addTaskButton.addEventListener('click', function() {
  addTask(taskBlock, '<div id="task-block">' +  '<h2>Task</h2>' +
    '<button class="action-button done-button">Done</button>' +
    '<button class="action-button delete-button">Delete</button>' + "</div>");
});
