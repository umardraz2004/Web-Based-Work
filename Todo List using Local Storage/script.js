const add = document.getElementById("add-todo");
const userInput = document.getElementById("inputField");
const updateBtn = document.getElementById("update");
const deleteBtn = document.getElementById("delete");
const udTextField = document.getElementById("udInputField");
let todoCount = 0;
let isOpen = false;
var updateValue;
let gotValue = false;
readFromLocalStorage();

add.addEventListener("click", (e) => {
    let input = userInput.value;
    if (input) {
        if (todoCount < 7) {
            const list = document.getElementById("todoList");
            const newItem = document.createElement("div");
            newItem.classList.add("task");
            newItem.textContent = input;
            list.appendChild(newItem);
            userInput.value = "";
            todoCount++;
        } else {
            alert("Maximum number of tasks reached!");
        }
    }
    createLocalStorage();
});

deleteBtn.addEventListener("click", (e) => {
    let input = parseInt(udTextField.value) - 1;
    let tasks = document.querySelectorAll(".task");
    if (!isNaN(input) && input >= 0 && input < tasks.length) {
        tasks[input].parentNode.removeChild(tasks[input]);
        deleteTaskFromLocalStorage(tasks[input]);
        todoCount--;
    } else {
        console.log("Invalid input or index out of range");
    }
});

updateBtn.addEventListener("click", (e) => {
    const valueToUpdate = udTextField.value;
    if (!isOpen) {
        if (valueToUpdate) {
            isOpen = true;
            let validation = checkValidationForUpdate(valueToUpdate);
            console.log(validation);
            if (validation) {
                const buttons = document.getElementById("button");
                const ud = document.getElementById("ud");
                const newItem = document.createElement("input");
                newItem.classList.add("udField");
                newItem.classList.add("input2");
                newItem.placeholder = "Enter text to update";
                newItem.type = "text";
                ud.insertBefore(newItem, buttons);
                gotValue = false;
            } else {
                validation = checkValidationForUpdate(valueToUpdate);
                isOpen = false;
            }
        }
    } else if (gotValue == false) {
        gotValue = true;
        const item = document.querySelector(".input2");
        let tasks = document.querySelectorAll(".task");
        for (let i = 0; i < tasks.length; i++) {
            if (valueToUpdate - 1 == i) {
                tasks[i].textContent = item.value;
            }
        }
        console.log("i am rinnung got value");
        updateTaskInLocalStorage(valueToUpdate, item);
        removeItem();
    } else {
        if (!isOpen) {
            isOpen = false;
            console.log("i am running in else");
            removeItem();
        }
    }
});

function checkValidationForUpdate(data) {
    let tasks = document.querySelectorAll(".task");
    for (let i = 0; i < tasks.length; i++) {
        if (i + 1 == data) {
            return true;
        }
    }
    return false;
}

function removeItem() {
    isOpen = false;
    const buttons = document.getElementById("button");
    const previousElement = buttons.previousElementSibling;
    if (previousElement && previousElement.classList.contains("udField")) {
        previousElement.remove();
    }
}

function createLocalStorage() {
    let taskElements = document.querySelectorAll(".task");
    let tasksArray = Array.from(taskElements).map((task) => {
        return {
            text: task.textContent.trim(),
        };
    });
    console.log(tasksArray);
    let jsonList = JSON.stringify(tasksArray);
    console.log(jsonList);
    localStorage.setItem("tasks", jsonList);
}

function readFromLocalStorage() {
    let tasksList = localStorage.getItem("tasks");
    if (tasksList) {
        let tasksArray = JSON.parse(tasksList);
        tasksArray.forEach((task) => {
            const list = document.getElementById("todoList");
            const newItem = document.createElement("div");
            newItem.classList.add("task");
            newItem.textContent = task.text;
            list.appendChild(newItem);
        });
    }
}

function deleteTaskFromLocalStorage(taskId) {
    let taskElements = document.querySelectorAll(".task");
    let tasksArray = Array.from(taskElements).map((task) => {
        return {
            text: task.textContent.trim(),
        };
    });
    let jsonList = JSON.stringify(tasksArray);
    tasksArray = tasksArray.filter((task) => task.id !== taskId);
    localStorage.setItem("tasks", jsonList);
}

function updateTaskInLocalStorage(taskId, newText) {
    console.log(taskId);
    console.log(newText);
    let taskElements = document.querySelectorAll(".task");
    let tasksArray = Array.from(taskElements).map((task) => {
        return {
            text: task.textContent.trim(),
        };
    });
    tasksArray = tasksArray.map((task) => {
        if (task.id === taskId) {
            return { text: newText, id: taskId };
        }
        return task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
}
