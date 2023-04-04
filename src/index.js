let projectsArray = [];
const addProjectBtn = document.querySelector('.addProject')
const projectModal = document.querySelector('.projectModal')
const submitProjectBtn = document.querySelector('#submitProject')
const projectsContainer = document.querySelector('.projectsContainer')
const project = document.querySelector('#newProject')


const projectFactory = (name, projectArray) => {
    return {name, projectArray}
};

const taskFactory = (name) => {
    return {name}
};

const inbox = projectFactory('inbox', []);
projectsArray.push(inbox)
const inboxDiv = document.createElement('div')
inboxDiv.className = ('customProject')
inboxDiv.textContent = inbox.name
projectsContainer.appendChild(inboxDiv)


function pushProjects() {
    let project = document.querySelector('#newProject').value
    const newProject = projectFactory(project, [])
    projectsArray.push(newProject)
    displayProjects()
}

function displayProjects() {
    projectsArray.forEach(element => {
        let projectDiv = document.createElement('div')
        projectDiv.className = ('customProject')
        projectDiv.textContent = element.name
        projectsContainer.appendChild(projectDiv)
    });
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