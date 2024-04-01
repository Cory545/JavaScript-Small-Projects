let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    //Whatever is written in taskInput, becomes the value for it to be stored
    let taskInputValue = taskInput.value;

    if (taskInputValue === '') {
        // Handle empty input case
    } else {
        //Create new li item if there is content added
        let newTaskItem = document.createElement('li');
        //From earlier, the stored value for taskInput will be the new text
        newTaskItem.textContent = taskInputValue;

        //When the li is made, also a delete button is made
        let deleteTaskButton = document.createElement('button');
        deleteTaskButton.textContent = "X";
        //When the button is clicked, the function "deleteTask" will run. The next function
        //After this one.
        deleteTaskButton.addEventListener('click', deleteTask);
        newTaskItem.appendChild(deleteTaskButton);
        let taskList = document.getElementById('taskList');
        taskList.appendChild(newTaskItem);
        taskInput.value = '';
    }
}
//Runs deleteTask, which will delete the closest "li" - the one its made with.
function deleteTask(event) {
    let taskItem = event.target.closest('li');
    taskItem.remove();
}
