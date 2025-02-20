const  modeToggle = document.getElementById('modeToggle');
const taskInput = document.getElementById('taskInput');
const createTaskBtn = document.getElementById('createTask');
const  count = document.getElementById('taskCount');
const  taskList = document.getElementById('taskList');
const  body = 
document.querySelector('body');
const header =
document.querySelector('header');
const taskBox =
document.getElementById('task-box');

let isMoonIcon = true;

let tasks = [];

let taskCount = tasks.length;

const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];

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
        <div class="task-date">
            <i class="fa-regular fa-calendar"></i>
            <span id="t-date">${task.date}</span>
        </div>
        <div class="task-wrap">
            <i class="fa-regular fa-check-circle" id="completeIcon" onClick = completeTask(${index})></i>
        <div class="task" id="task" contenteditable = "true" onInput = editTask(${index})>${task.content}</div>
        
        <i class="fa-regular fa-trash-can" id="deleteIcon" onClick = deleteTask(${index})></i>
        </div>
        
      </div>`;
      taskList.appendChild(newElement);
    });
}
  
     
createTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let content = taskInput.value;
    if (content !== '') {
        let today = new Date();
        let d = today.getDate();
        let m = today.getMonth();
        let y = today.getFullYear();
        let taskDate = `${d} ${months[m]} ${y}`;
        tasks.unshift({
            content,
            status: 'doing',
            date: taskDate
        });
        
        taskCount++;
        addToHTML();
        saveToLocalStorage();
        taskInput.value = '';
    }
})
      
addToHTML();

function completeTask(index) {
    tasks[index].status = 'complete';
    addToHTML();
    saveToLocalStorage();
}   

function editTask(index) {
    let edited = document.querySelectorAll('.task')[index].innerText;
    tasks[index].content = edited;
    
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
    taskInput.classList.toggle('textareaDarkMode');
     
});
      
