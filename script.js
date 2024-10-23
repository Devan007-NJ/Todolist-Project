document.addEventListener('DOMContentLoaded', function() {
  console.log('The page has fully loaded');
});
document.getElementById('aboutbutton').addEventListener('click', function() {
  const targetSection = document.getElementById('tarabout');
  targetSection.scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('servicebutton').addEventListener('click', function() {
  const targetSection = document.getElementById('tarservice');
  targetSection.scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('contactbutton').addEventListener('click', function() {
  const targetSection = document.getElementById('tarcontact');
  targetSection.scrollIntoView({ behavior: 'smooth' });
});
function addTask() {
  const music= document.getElementById('myAudio');
  const taskInput = document.getElementById('task');
  const durationInput = document.getElementById('duration');
  const tasksList = document.getElementById('tasks');

  const taskValue = taskInput.value;
  const durationValue = parseInt(durationInput.value);

  if (!taskValue || !durationValue || durationValue <= 0) {
    alert('Please enter a valid task and duration.');
    return;
  }

  const timestamp = new Date().toLocaleString();

  const taskItem = document.createElement('li');
  taskItem.innerHTML = `
    <span class="task">${taskValue}</span>
    <span class="timestamp">${timestamp}</span>
    <span class="timestamp">${durationValue} mins</span>
    <button class="success-btn" onclick="completeTask(this)">Success</button>
    <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
  `;

  tasksList.appendChild(taskItem);

  taskInput.value = '';
  durationInput.value = '';

  setTimeout(() => {
    if (taskItem) {
      music.play();
      alert(`Task "${taskValue}" is not completed within ${durationValue} minutes.`);
      music.pause();
    }
  }, durationValue * 60000); // Convert minutes to milliseconds
}

function deleteTask(button) {
  const taskItem = button.parentElement;
  taskItem.remove();
}

function completeTask(button) {
  const taskItem = button.parentElement;
  taskItem.style.textDecoration = 'line-through';
  button.remove();
}

  



  function addTaskSch() {
    // Get input values
    const taskDescription = document.getElementById("taskInput").value;
    const taskDate = document.getElementById("dateInput").value;
    
    // Check if both inputs have values
    if (taskDescription === "" || taskDate === "") {
        alert("Please enter a task and choose a date.");
        return;
    }

    // Get current time for when the task was added
    const currentTime = new Date();
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const timeAdded = `${hours}:${minutes}`;

    // Create list item
    const listItem = document.createElement("li");

    // Add task description and date
    const taskText = document.createElement("span");
    taskText.textContent = `${taskDescription} - Scheduled for: ${taskDate} (Added at: ${timeAdded})`;

    // Create buttons container
    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("task-buttons");

    // Create Success button
    const successButton = document.createElement("button");
    successButton.textContent = "Success";
    successButton.classList.add("success");
    successButton.onclick = function() {
        listItem.classList.toggle("completed");
        listItem.style.textDecoration = 'line-through';
    };

    // Create Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.onclick = function() {
        listItem.remove();
    };

    // Append buttons to buttons container
    buttonsDiv.appendChild(successButton);
    buttonsDiv.appendChild(deleteButton);

    // Append task text and buttons to list item
    listItem.appendChild(taskText);
    listItem.appendChild(buttonsDiv);

    // Add list item to the task list
    document.getElementById("taskList").appendChild(listItem);

    // Clear input fields
    document.getElementById("taskInput").value = "";
    document.getElementById("dateInput").value = "";
}

