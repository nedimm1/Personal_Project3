'use strict'

const taskBlock = document.getElementById('task-block0')
const finishedTasks = document.getElementById('finished-tasks')
const addTaskButton = document.querySelector('.plus-button');
const body = document.getElementById('body');
const checkbox = document.getElementById('task-checkbox')
const deleteButton = document.querySelector('.delete-button')
const taskCounter = document.getElementById('task-counter')
const progressBar = document.getElementById('progress-width')
let buttonHtml = '<div class="task-header-new"><h2 class="task-number-new">Task</h2><textarea id="task-text" placeholder="Name Your Task"></textarea></div>' +
    '<button class="action-button delete-button-new">Delete</button>' + ' <input type="checkbox" class="task-checkbox-new">'
let i = 1
let doneTaskCounter = 0
let percent;
let percent2;



deleteButton.addEventListener('click', function () {
    taskBlock.remove()
    i--
    percent2 = 100 / i
    percent = (doneTaskCounter / i) * 100
    let finalPrecent = percent - percent2
    taskCounter.textContent = `tasks: ${doneTaskCounter}/${i}`
    progressBar.style.width = `${finalPrecent}`
    if(i === 0){
        progressBar.style.width = '0%'
        doneTaskCounter = 0
    }

})

checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        finishedTasks.after(taskBlock)
        doneTaskCounter++
        percent = (doneTaskCounter / i) * 100
        taskCounter.textContent = `tasks: ${doneTaskCounter}/${i}`
        progressBar.style.width = `${percent}%`
    } else {
        finishedTasks.before(taskBlock)
        doneTaskCounter--
        percent2 = 100 / i
        percent = (doneTaskCounter / i) * 100
        let finalPrecent = percent - percent2
        taskCounter.textContent = `tasks: ${doneTaskCounter}/${i}`
        progressBar.style.width = `${finalPrecent}`
    }
})

taskCounter.textContent = `tasks: ${doneTaskCounter}/${i}`

addTaskButton.addEventListener('click', function () {
    i++

    percent2 = 100 / i
    percent = (doneTaskCounter / i) * 100
    let finalPrecent = percent - percent2
    taskCounter.textContent = `tasks: ${doneTaskCounter}/${i}`
    progressBar.style.width = `${finalPrecent}`


    const task = document.createElement('div');
    task.id = `task-block${i}`
    task.innerHTML = buttonHtml
    finishedTasks.before(task)

    console.log(finishedTasks)

    task.style.width = '50%'
    task.style.margin = '20px auto'
    task.style.marginBottom = '100px'
    task.style.backgroundColor = '#fff';
    task.style.padding = '20px'
    task.style.borderRadius = '10px'
    task.style.boxShadow = " 0 4px 8px rgba(0, 0, 0, 0.1)"
    task.style.borderBottom = '1px solid #ccc;'


    const taskDiv = document.querySelector('.task-header-new')


    const taskNumber = document.querySelector('.task-number-new')
    taskNumber.className = `task-number${i}`
    taskNumber.textContent = `Task${i}: `

    console.log(task.id)
    const taskBlockNew = document.getElementById(task.id)
    console.log(taskBlockNew)

    const nextElement = task.nextElementSibling;

    const deleteButton = document.querySelector('.delete-button-new')
    deleteButton.className = `delete-button${i}`
    deleteButton.style.marginRight = '600px'
    deleteButton.style.color = "#fff"
    deleteButton.classList.add('action-button')

    deleteButton.addEventListener('click', function () {
        taskBlockNew.remove()
        i--
        taskCounter.textContent = `tasks done: ${doneTaskCounter}/${i}`
    })



    const checkboxNew = document.querySelector('.task-checkbox-new')
    checkboxNew.className = `checkBox${i}`
    checkboxNew.style.width = '50px'
    checkboxNew.style.height = '50px'

    checkboxNew.addEventListener('change', function () {
        if (checkboxNew.checked) {
            finishedTasks.after(taskBlockNew)
            console.log(finishedTasks)
            doneTaskCounter++
            percent = (doneTaskCounter / i) * 100
            taskCounter.textContent = `tasks: ${doneTaskCounter}/${i}`
            progressBar.style.width = `${percent}%`
        } else if (!checkboxNew.checked) {
            percent2 = 100 / i
            console.log(percent2)
            doneTaskCounter--
            percent = (doneTaskCounter / i) * 100
            let finalPrecent = percent - percent2
            console.log(percent, percent2, finalPrecent)
            taskCounter.textContent = `tasks: ${doneTaskCounter}/${i}`
            progressBar.style.width = `${finalPrecent}%`
            finishedTasks.before(taskBlockNew)
            console.log(progressBar)
            if (doneTaskCounter === 0) {
                progressBar.style.width = '0%'
            }

        }
    })

    taskCounter.textContent = `tasks done: ${doneTaskCounter}/${i}`


}
);


