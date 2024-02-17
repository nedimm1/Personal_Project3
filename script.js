'use strict'

const taskBlock = document.getElementById('task-block0')
const addTaskButton = document.querySelector('.plus-button');
const body = document.getElementById('body');
const deleteButton = document.querySelector('.delete-button')
let buttonHtml =   '<div class="task-header-new"><h2 class="task-number-new">Task</h2><textarea id="task-text" placeholder="Name Your Task"></textarea></div>' + 
'<button class="action-button delete-button-new">Delete</button>' + ' <input type="checkbox" id="task-checkbox-new">'
let i = 1

deleteButton.addEventListener('click', function(){
    taskBlock.remove()
})


addTaskButton.addEventListener('click', function() {
    const task = document.createElement('div');
    task.id = `task-block${i++}`
    task.innerHTML = buttonHtml
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

    const taskDiv = document.querySelector('.task-header-new')

    console.log(taskDiv)
    
    const taskNumber = document.querySelector('.task-number-new')
    taskNumber.className = `task-number${i}`
    taskNumber.textContent = `Task${i}: `

    console.log(taskNumber)
    // const taskNumber = document.querySelector('.task-number-new')
    // taskNumber.className = `task-number${i}`
    // taskNumber.textContent = `Task${i}: `

    const taskBlockNew = document.getElementById(task.id)
    console.log(taskBlockNew)

    const nextElement = task.nextElementSibling;
    
    const deleteButton = document.querySelector('.delete-button-new')
    deleteButton.className = `delete-button${i}`
    deleteButton.style.marginRight = '600px'
    deleteButton.style.color = "#fff"
    deleteButton.classList.add('action-button')
    console.log(deleteButton)
    deleteButton.addEventListener('click', function(){
       taskBlockNew.remove()
    })

}
);


