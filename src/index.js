import { projectsArray } from "../../../todoFail/src/projectObjs";

projectsArray = [];

const projectFactory = (name, projectArray) => {
    return {name, projectArray}
};

const taskFactory = (name) => {
    return {name}
};

const inbox = projectFactory('inbox', []);
projectsArray.push(inbox)


function pushProjects() {
    let project = document.querySelector('#newProject').value
    const newProject = projectFactory(project, [])
    projectsArray.push(newProject)
    displayProjects()
}

function displayProjects() {
    const projectsContainer = document.querySelector('.projectsContainer')
    projectsArray.forEach(element => {
        let projectDiv = document.createElement('div')
        projectDiv.className = ('customProject')
        projectDiv.textContent = element.name
        projectsContainer.appendChild(projectDiv)
    });
}

