
function addTask() {
    var taskInput = document.getElementById("taskinput"); // Reference the input element
    var taskValue = taskInput.value; // Get the current value of the input
    var taskList = document.getElementById("tasklist");
    
    if (taskValue == "") {
        alert("Please enter the task");
        return;
    }

    var listItems = document.createElement('li');
    listItems.innerText = taskValue;
    taskList.appendChild(listItems);

    var buttoncontainer = document.createElement('div');
    listItems.appendChild(buttoncontainer);
    buttoncontainer.className = "task-button";

    var deletebutton = document.createElement('button');
    buttoncontainer.appendChild(deletebutton);
    deletebutton.innerText = "Delete";
    deletebutton.onclick = function () {
        taskList.removeChild(listItems);
    };

    var completebutton = document.createElement('button');
    buttoncontainer.appendChild(completebutton);
    completebutton.innerText = "Complete";
    completebutton.onclick = function () {
        listItems.classList.toggle("completed");
    };

    // Clear the input field after adding the task
    taskInput.value = "";
}
