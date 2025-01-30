let modeToggle = document.getElementById('modeToggle');
const taskInput = document.getElementById('taskInput');
const createTaskBtn = document.getElementById('createTask');
let count = document.getElementById('taskCount');
let taskList = document.getElementById('taskList');
let body = 
document.querySelector('body');
let header =
document.querySelector('header');
let taskBox =
document.getElementById('task-box');
let isMoonIcon = true;


let tasks = [];

let taskCount = tasks.length;

if (localStorage.getItem('tasks') !== null) {
  tasks =   JSON.parse(localStorage.getItem('tasks'));
  taskCount = tasks.length;
}

function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('taskCount', JSON.stringify(taskCount));
}
      
function addToHTML() {
    taskList.innerHTML = '';
    count.textContent = taskCount;
    tasks.forEach((task, index) => {
     let newElement = document.createElement('div');
     newElement.classList.add(task.status);
     
     newElement.innerHTML = `
       <div class="ctask ${isMoonIcon ? '' : 'ctaskDarkMode'}" id="ctask">
        <i class="fa-regular fa-check-circle" id="completeIcon" onClick = completeTask(${index})></i>
        <div class="task" id="task" contenteditable = "true" onInput = editTask(${index})>${task.content}</div>
        
        <i class="fa-regular fa-trash-can" id="deleteIcon" onClick = deleteTask(${index})></i>
        
      </div>`;
      taskList.appendChild(newElement);
    });
}
      
     
createTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let content = taskInput.value;
    if (content !== '') {
        tasks.unshift({
            content,
            status: 'doing'
        });
        
        taskCount++;
        addToHTML();
        saveToLocalStorage();
        taskInput.value = '';
    }
})
      
addToHTML();

function editTask(index) {
    let edited = document.querySelectorAll('.task')[index].innerText;
    tasks[index].content = edited;
    saveToLocalStorage();
}
      
      
function completeTask(index) {
    tasks[index].status = 'complete';
    addToHTML();
    saveToLocalStorage();
}   

function deleteTask(index) {
    tasks = tasks.filter((task, newIndex) => newIndex !== index)
    taskCount--;
    addToHTML();
    saveToLocalStorage();
}


modeToggle.addEventListener('click', () => {

         const ctaskElement = document.querySelectorAll('.ctask');
     ctaskElement.forEach((task) => {
         task.classList.toggle('ctaskDarkMode');
     });
     
     isMoonIcon = !isMoonIcon;
     modeToggle.innerHTML = isMoonIcon ? `<i class="fa fa-moon"></i>` : `<i class="fa fa-sun"></i>`;
    modeToggle.style.transition = '0.3s ease-out';
    body.classList.toggle('bodyDarkMode');
   header.classList.toggle('headerDarkMode');
    taskBox.classList.toggle('task-boxDarkMode');
     
});
      