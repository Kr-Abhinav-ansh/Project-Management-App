// this toggleMenu() function will access the menu area and make it appear or disappear whenever clicked
function toggleMenu() {
    var toggleVariable = document.getElementsByClassName('menu-block')[0];
    if (toggleVariable.style.display == 'none') {
        toggleVariable.style.display = '';
    } else {
        toggleVariable.style.display = 'none';
    }
}  

// project List Object to include in template
var projectListObject = [
    { name: 'Project one' },
    { name: 'Project two' },
    { name: 'Project three' }
];

// showProjects() function lets us use the same project templet multiple times
showProjects();
function showProjects(listId) {

    projectListObject.forEach(function (value, index) {
        var template = '<div class="project-card">' + value.name +
            '<ul>' +
            '<li>task 1</li>' +
            '<li>task 2</li>' +
            '<li>task 3</li>' +
            '</ul>' +
            '</div>';

        if (listId) {
            document.getElementById(listId).innerHTML += template;
        } else {
            document.getElementById('projectList').innerHTML += template;
        }

    });
}

// removeCard() will remove the cards
function removeCard() {
    document.getElementById('projectList').innerHTML = '';
}

// addBoard()
var idName = 1;
function addBoard(id) {
    idName++;
    var listId = 'projectList_' + idName;

    var templateBlock = '<section id="board-block">' +
        '<div>' + id.value + '<button onclick="removeCard()">Remove card</button></div>' +
        '<div class="project-block" id = ' + listId + '>' +
        '</div>' +
        '</section>';

    document.getElementById('boardBlockList').innerHTML += templateBlock;
    showProjects(listId);
}