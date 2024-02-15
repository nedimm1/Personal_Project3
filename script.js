'use strict'

const taskBlock = document.getElementById('task-block0')
const addTaskButton = document.querySelector('.plus-button');
const body = document.getElementById('body');
const deleteButton = document.querySelector('.delete-button0')
let theCode =  '<h2>Task</h2>' +
'<button class="action-button done-button">Done</button>' +
'<button class="action-button delete-button0">Delete</button>'
let i = 1

deleteButton.addEventListener('click', function(){
    taskBlock.remove()
})


addTaskButton.addEventListener('click', function() {
    const task = document.createElement('div');
    task.id = `task-block${i++}`
    task.innerHTML = theCode
    body.append(task)

    task.style.width = '50%'
    task.style.margin = '20px auto'
    task.style.marginBottom = '100px'
    task.style.backgroundColor = '#fff';
    task.style.padding = '20px'
    task.style.borderRadius = '10px'
    task.style.boxShadow = " 0 4px 8px rgba(0, 0, 0, 0.1)"
    task.style.borderBottom = '1px solid #ccc;'

    console.log(task)

    const taskBlockNew = document.getElementById(task.id)
    console.log(taskBlockNew)

    const nextElement = task.nextElementSibling;
    
    const deleteButton = document.querySelector('.delete-button0')
    deleteButton.className = 'delete-button-new'
    deleteButton.classList.add('action-button')
    console.log(deleteButton)
    deleteButton.addEventListener('click', function(){
       taskBlockNew.remove()
    })

}
);


