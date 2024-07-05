function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event, listId) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var task = document.getElementById(data);
    document.getElementById(listId).appendChild(task);
}

function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value;

    var listItem = document.createElement('li');
    listItem.id = "task_" + new Date().getTime();
    listItem.draggable = true;
    listItem.ondragstart = drag;

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onchange = function () {
        if (listItem.className === 'completed') {
            listItem.className = '';
        } else {
            listItem.className = 'completed';
        }
    };

    var taskSpan = document.createElement('span');
    taskSpan.innerHTML = taskText;

    var editButton = document.createElement('button');
    editButton.innerHTML = '✂';
    editButton.className = 'editButton';
    editButton.onclick = function () {
        if (editButton.innerHTML === '✂') {
            taskSpan.contentEditable = true;
            taskSpan.focus();
            editButton.innerHTML = '✔';
            editButton.className = 'saveButton';
        } else {
            taskSpan.contentEditable = false;
            editButton.innerHTML = '✂';
            editButton.className = 'editButton';
        }
    };

    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = '✖';
    deleteButton.className = 'deleteButton';
    deleteButton.onclick = function () {
        listItem.parentNode.removeChild(listItem);
    };

    listItem.appendChild(checkbox);
    listItem.appendChild(taskSpan);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    document.getElementById('taskList').appendChild(listItem);

    taskInput.value = '';
}

function addTask1() {
    var taskInput = document.getElementById('taskInput1');
    var taskText = taskInput.value;

    var listItem = document.createElement('li');
    listItem.id = "task_" + new Date().getTime();
    listItem.draggable = true;
    listItem.ondragstart = drag;

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onchange = function () {
        if (listItem.className === 'completed') {
            listItem.className = '';
        } else {
            listItem.className = 'completed';
        }
    };

    var taskSpan = document.createElement('span');
    taskSpan.innerHTML = taskText;

    var editButton = document.createElement('button');
    editButton.innerHTML = '✂';
    editButton.className = 'editButton';
    editButton.onclick = function () {
        if (editButton.innerHTML === '✂') {
            taskSpan.contentEditable = true;
            taskSpan.focus();
            editButton.innerHTML = '✔';
            editButton.className = 'saveButton';
        } else {
            taskSpan.contentEditable = false;
            editButton.innerHTML = '✂';
            editButton.className = 'editButton';
        }
    };

    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = '✖';
    deleteButton.className = 'deleteButton';
    deleteButton.onclick = function () {
        listItem.parentNode.removeChild(listItem);
    };

    listItem.appendChild(checkbox);
    listItem.appendChild(taskSpan);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    document.getElementById('taskList1').appendChild(listItem);

    taskInput.value = '';
}

function addTask2() {
    var taskInput = document.getElementById('taskInput2');
    var taskText = taskInput.value;

    var listItem = document.createElement('li');
    listItem.id = "task_" + new Date().getTime();
    listItem.draggable = true;
    listItem.ondragstart = drag;

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onchange = function () {
        if (listItem.className === 'completed') {
            listItem.className = '';
        } else {
            listItem.className = 'completed';
        }
    };

    var taskSpan = document.createElement('span');
    taskSpan.innerHTML = taskText;

    var editButton = document.createElement('button');
    editButton.innerHTML = '✂';
    editButton.className = 'editButton';
    editButton.onclick = function () {
        if (editButton.innerHTML === '✂') {
            taskSpan.contentEditable = true;
            taskSpan.focus();
            editButton.innerHTML = '✔';
            editButton.className = 'saveButton';
        } else {
            taskSpan.contentEditable = false;
            editButton.innerHTML = '✂';
            editButton.className = 'editButton';
        }
    };

    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = '✖';
    deleteButton.className = 'deleteButton';
    deleteButton.onclick = function () {
        listItem.parentNode.removeChild(listItem);
    };

    listItem.appendChild(checkbox);
    listItem.appendChild(taskSpan);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    document.getElementById('taskList2').appendChild(listItem);

    taskInput.value = '';
}

document.getElementById('taskInput').onkeypress = function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
};

document.getElementById('taskInput1').onkeypress = function (event) {
    if (event.key === 'Enter') {
        addTask1();
    }
};

document.getElementById('taskInput2').onkeypress = function (event) {
    if (event.key === 'Enter') {
        addTask2();
    }
};

function deleteAllTasks() {
    var taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
}

function deleteAllTasks1() {
    var taskList = document.getElementById('taskList1');
    taskList.innerHTML = '';
}

function deleteAllTasks2() {
    var taskList = document.getElementById('taskList2');
    taskList.innerHTML = '';
}