let projectsArray = [];
const addProjectBtn = document.querySelector('.addProject')
const projectModal = document.querySelector('.projectModal')
const submitProjectBtn = document.querySelector('#submitProject')
const projectsContainer = document.querySelector('.projectsContainer')
const project = document.querySelector('#newProject')
const projectContent = document.querySelector('.projectContent')
const taskButton = document.querySelector('.taskBtn')
const taskModal = document.querySelector('.taskModal')
const submitTaskBtn = document.querySelector('#submitTask')
const task = document.querySelector('#task')
const closeTaskBtn = document.querySelector('.cancelTask')
const closeProjectBtn = document.querySelector('.cancelProject')
const taskContainer = document.querySelector('.taskContainer')

const projectFactory = (name, projectArray) => {
    return {name, projectArray}
};

const taskFactory = (name) => {
    return {name}
};

const inbox = projectFactory('inbox', []);
projectsArray.push(inbox)
const inboxDiv = document.createElement('div')
inboxDiv.className = ('projectDiv')
inboxDiv.textContent = inbox.name
projectsContainer.appendChild(inboxDiv)
let inboxTitle = document.createElement('div')
let inboxBtn = document.createElement('button')
inboxTitle.className = 'projectTitle'
inboxTitle.textContent = inbox.name
inboxBtn.className = 'taskBtn'
inboxBtn.textContent = 'New Task'
projectContent.appendChild(inboxTitle)
projectContent.appendChild(inboxBtn)


function pushProjects() {
    let project = document.querySelector('#newProject').value
    const newProject = projectFactory(project, [])
    projectsArray.push(newProject)
    displayProjects()
}

function displayProjects() {
    count = 0
    for (let i =0; i < projectsArray.length; i++) {
        let projectDiv = document.createElement('div')
        projectDiv.className = 'projectDiv'
        projectDiv.innerHTML = `
            <div class="customProject">${projectsArray[i].name}</div>
            <button id='${count}' class="deleteProBtn"'>Delete</button> 
        `
        projectsContainer.appendChild(projectDiv)
        count += 1
    }
}


addProjectBtn.addEventListener('click', () =>{
    projectModal.showModal()
})

submitProjectBtn.addEventListener('click', function(event) {
    event.preventDefault()
    projectsContainer.innerHTML = ''
    pushProjects()
    projectModal.close()
    project.value = ''
})

closeProjectBtn.addEventListener('click', (event) => {
    event.preventDefault()
    projectModal.close()
})

/* -------------click events on project tabs---------------------------------- */

function createProjectContent(projectName){
    let projectTitle = document.createElement('div')
    let taskBtn = document.createElement('button')
    projectTitle.className = 'projectTitle'
    projectTitle.textContent = projectName
    taskBtn.className = 'taskBtn'
    taskBtn.textContent = 'New Task'
    projectContent.appendChild(projectTitle)
    projectContent.appendChild(taskBtn)
}

document.addEventListener('click', e=>{
    if (e.target.matches('.customProject')){
        projectContent.innerHTML = ''
        taskContainer.innerHTML = ''
        createProjectContent(e.target.textContent)
        displayTasks(findArray())
    }
})

/* -------------click events on task button---------------------------------- */

document.addEventListener('click', e => {
    if (e.target.matches('.taskBtn')){
        taskModal.showModal()
    }
})

function findArray(){
    for (let i = 0; i < projectsArray.length; i++){
        let projectTitle = document.querySelector('.projectTitle').textContent
        if(projectsArray[i].name === projectTitle)
        return projectsArray[i].projectArray
    }
}

function pushTasks(array){
    let task = document.querySelector('#task').value
    const newTask = taskFactory(task)
    array.push(newTask)
    displayTasks(findArray())
}

submitTaskBtn.addEventListener('click', function(event){
    event.preventDefault()
    taskContainer.innerHTML = ''
    pushTasks(findArray())
    taskModal.close()
    task.value = ''
})

closeTaskBtn.addEventListener('click', (event) => {
    event.preventDefault()
    taskModal.close()
})

/* -------------displaying tasks---------------------------------- */

function displayTasks(array){
   count = 0
   for (let i = 0; i < array.length; i++){
    let taskDiv = document.createElement('div')
    taskDiv.className = 'newTask'
    taskDiv.id = count
    taskDiv.innerHTML = `
        <div class='taskName'>${array[i].name}</div>
        <button id='${count}' class='done'>Done</button>
    `
    taskContainer.appendChild(taskDiv)
    count += 1
   }
}
/* -------------deleting projects and tasks---------------------------------- */

document.addEventListener('click', e => {
    if (e.target.matches('.deleteProBtn')){
         deleteItems(e.target.id, projectsArray)
    }
})

function deleteItems(index, array){
    array.splice(index, 1);
    projectsContainer.innerHTML = ''
    displayProjects();
}

document.addEventListener('click', e => {
    if (e.target.matches('.done')){
        deleteItems(e.target.id, findArray())
        taskContainer.innerHTML = ''
        displayTasks(findArray())
    }
})