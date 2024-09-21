document.addEventListener('DOMContentLoaded', function() {
        //variables needed

    const userInput = document.getElementById("userInput");
    const clickToAdd = document.querySelector(".addButton");
    const Tasks = document.querySelector('.tasks');


    function displayUserInput(){
        const userData = userInput.value;

        // Create a task item container
        const taskItems = document.createElement("div");
        taskItems.classList.add("taskItem");
        Tasks.appendChild(taskItems);


        // Create task name container 
        const taskName = document.createElement("div");
        taskName.classList.add('taskName');
        const paragraph = document.createElement("p");
        //add user data
        paragraph.innerText = userData;
        taskName.appendChild(paragraph);
        taskItems.appendChild(taskName);


        //create buttons container
        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('buttons');
        
        //create checkbox
        const checkBox = document.createElement("div");
        checkBox.classList.add("checkbox");


        const imgCheckMark = document.createElement('span');
        imgCheckMark.classList.add("material-icons");
        imgCheckMark.textContent = "check";
        checkBox.appendChild(imgCheckMark)
        buttonsContainer.appendChild(checkBox);
        taskItems.appendChild(buttonsContainer);
        
        //Create delete bin
        const binElement = document.createElement("div");
        binElement.classList.add("bin");

        const imgBin = document.createElement('span');
        imgBin.classList.add("material-icons");
        imgBin.textContent = "delete";
        binElement.appendChild(imgBin);
        buttonsContainer.appendChild(binElement);
        taskItems.appendChild(buttonsContainer);

        //Clear user input after adding task
        clearUserInput(); // i'm calling this function before i have declared it due to hositing.

       //Add event listener to checkbox for striking through specific task
        checkBox.addEventListener('click', function(){ // this is a function declaration and will be hoisted to the top of the local scope of displayUserInput().
            checkMarkTask(paragraph); //Pass the specifcic task (the paragraph)******
            //Even though all tasks have similar structures, the event listener knows the specific context (the task container and its elements) where the event occurred. So when you pass paragraph to the checkMarkTask function, you're passing the exact <p> element from the task that the user clicked, not all <p> elements.This context-based event handling makes it unnecessary to have unique IDs or identifiers on each element when dealing with user interactions like clicks.
         });

        binElement.addEventListener('click',function(){ // this is a function declaration and will be hoisted to the top of the local scope of displayUserInput().
            deleteTask(taskItems); //Pass the specific task item container*********
        });
    }


    //Function to clear user input field
    function clearUserInput(){ // this is a function declaration and will be hoisted to the top of the global scope of 'DOMContentLoaded', function() {}
        userInput.value= "";
    }

    // Event listener for adding new task on button click
    clickToAdd.addEventListener('click', function () {  // this is a function declaration and will be hoisted to the top of the global scope of 'DOMContentLoaded', function() {}
        if (userInput.value.trim() !== "") {
            displayUserInput();
                    //new task is added, if the user didnt add a task and simply clicked the add button, this if statement would prevent a blank task from being added.
        }
        else{
            alert("Please enter a task");
        }
    });

    // Function to strike through a specific task
    function checkMarkTask(task) { // this is a function declaration and will be hoisted to the top of the global scope of 'DOMContentLoaded', function() {}
        if (task.style.textDecoration === "line-through") {
            task.style.textDecoration = "none"; // Uncheck
        } else {
            task.style.textDecoration = "line-through"; // Check
        }
    }

       // Function to delete a specific task item
       function deleteTask(taskItem) { // this is a function declaration and will be hoisted to the top of the global scope of 'DOMContentLoaded', function() {}
        taskItem.remove();
    }
    console.log("hello world");
});

