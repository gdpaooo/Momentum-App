// ================================ CLOCK ================================
function updateTime() {
    let date = new Date();
    let timeString = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    document.getElementById("clock").textContent = timeString;
}
updateTime();
setInterval(updateTime, 1000);


// ================================ GREETINGS ================================

let greetings = document.getElementById("greetings");
let yourNameContainer = document.getElementById("yourNameContainer");
let yourName = document.getElementById("yourName");
let editNameContainer = document.getElementById("editNameContainer");
let editName= document.getElementById("editName");
let buttonEditName = document.getElementById("buttonEditName");
let buttonDeleteName = document.getElementById("buttonDeleteName");
let date = new Date();

function greetingsFunction() {
    if(date.getHours() >= 18 || date.getHours() < 6) {
        greetings.textContent = "Good evening, "
    } else if (date.getHours() < 12 && date.getHours() >= 6) {
        greetings.textContent = "Good morning, "
    } else if (date.getHours() < 18 && date.getHours() >= 12) {
    greetings.textContent = "Good afternoon, "
    }
}
greetingsFunction();
greetingsFunction(updateTime, 1000);


function editYourName() {
    yourNameContainer.classList.toggle("hide");
    editNameContainer.classList.toggle("hide");
    buttonEditName.classList.toggle("hide");
    buttonDeleteName.classList.toggle("hide");
}

buttonEditName.addEventListener("click", function() {
    editYourName();
    editName.value = yourName.textContent;
    editName.focus();
})
buttonDeleteName.addEventListener("click", function() {
    editYourName();
    editName.value = "";
})

editName.addEventListener("keyup", function(event) {
    if (event.key === "Enter" && editName.value !== "") {
        yourName.textContent = editName.value;
        editYourName();
    }
    if (event.key === "Escape") {
        yourName.textContent = yourName.textContent;
        editYourName();
    }
})


// ================================ GOAL (FOCUS) ================================

let mainGoalQuestion = document.getElementById("mainGoalQuestion");
let mainGoalAnswer = document.getElementById("mainGoalAnswer");
let enterMainGoal = document.getElementById("enterMainGoal");
let mainGoalCheckBox = document.getElementById("mainGoalCheckBox");
let checkBoxLabel = document.getElementById("checkBoxLabel");
let mainGoalButtonContainer = document.getElementById("mainGoalButtonContainer");
let buttonEditMainGoal= document.getElementById("buttonEditMainGoal");
let buttonClearMainGoal = document.getElementById("buttonClearMainGoal");

function enterMainGoalFunction() {
    mainGoalQuestion.classList.toggle("hide");
    mainGoalAnswer.classList.toggle("hide");
    mainGoalButtonContainer.classList.toggle("hide");
}

enterMainGoal.addEventListener("keyup", function(event) {
    if (event.key === "Enter" && enterMainGoal.value !== "") {
        checkBoxLabel.textContent = enterMainGoal.value;
        enterMainGoalFunction();
    }
})

buttonEditMainGoal.addEventListener("click", function() {
    enterMainGoalFunction();
    enterMainGoal.value = checkBoxLabel.textContent;
    enterMainGoal.focus();
})
buttonClearMainGoal.addEventListener("click", function() {
    enterMainGoalFunction();
    enterMainGoal.value = "";
})

mainGoalCheckBox.addEventListener("click", function() {
    if (mainGoalCheckBox.checked) {
        checkBoxLabel.classList.add("completed");
        alert("Way to go! Keep it up!");
    } else {
        checkBoxLabel.classList.remove("completed");
    }
})


// ================================ TASK ================================

let taskMainCheckBox = document.getElementById("taskMainCheckBox");

taskMainCheckBox.addEventListener("click", function() {
    if (taskMainCheckBox.checked) {
        taskContainer.classList.remove("hide");
    } else {
        taskContainer.classList.add("hide");
    }
})

// ADD TASK
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const taskText = taskInput.value;

    // creating elements
    const listItem = document.createElement("div");
    const label = document.createElement("label");
    const editLabel = document.createElement("input");
    const checkBox = document.createElement("input");
    const taskEditButton = document.createElement("button");
    const taskDeleteButton = document.createElement("button");

    taskEditButton.textContent = "✎";
    taskDeleteButton.textContent = "✕";

    // adding functionality
    label.textContent = taskText;
    checkBox.type = "checkBox";
    checkBox.onclick = function () {
        label.classList.toggle("completed");
        taskEditButton.disabled = checkBox.checked;
        taskDeleteButton.disabled = checkBox.checked;
    }
    
    taskEditButton.onclick = function () {
        editLabel.value = label.textContent;
        label.classList.toggle("hide");
        editLabel.classList.toggle("hide");
        editLabel.focus();
        taskEditButton.disabled = true;
        taskDeleteButton.disabled = true;
    }
    taskDeleteButton.onclick = function () {
        listItem.remove();
    }

    editLabel.onkeyup = function (event) {
        if (event.key === "Enter" && editLabel.value !== "") {
            label.textContent = editLabel.value;
            label.classList.toggle("hide");
            editLabel.classList.toggle("hide");
            taskEditButton.disabled = false;
            taskDeleteButton.disabled = false;
        }
        if (event.key === "Escape") {
            label.textContent = label.textContent;
            label.classList.toggle("hide");
            editLabel.classList.toggle("hide");
            taskEditButton.disabled = false;
            taskDeleteButton.disabled = false;
        }
    }

    // appending the elements
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editLabel);
    listItem.appendChild(taskEditButton);
    listItem.appendChild(taskDeleteButton);
    taskList.appendChild(listItem);
    taskInput.value = "";

    // styling
    listItem.style.display = "grid";
    listItem.style.gridTemplateColumns = "auto auto auto auto";
    listItem.style.alignItems = "start";
    listItem.style.margin = "10px"
    listItem.style.gap = "10px";
    listItem.style.justifyContent = "start";
    
    label.style.width = "180px";
    label.style.wordBreak = "break-word";
    
    editLabel.style.width = "180px";
    editLabel.style.wordBreak = "break-word";
    editLabel.classList.toggle("hide");
    editLabel.addEventListener("focus", function() {
        editLabel.style.outline = "none";
    })

}

taskInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter" && taskInput.value !== "") {
        addTask();
        taskInput.focus();
    }
    if (event.key === "Escape") {
        taskInput.value = "";
    }
})



// ================================ QUOTES ================================

let quoteHTML = document.getElementById("quote");
let quoteAuthorHTML = document.getElementById("quoteAuthor");
let openQuoteAddButton = document.getElementById("openQuoteAddButton");
let addQuoteContainer = document.getElementById("addQuoteContainer");
let addQuoteInput = document.getElementById("addQuoteInput");
let addAuthorInput = document.getElementById("addAuthorInput");
let addQuoteButton = document.getElementById("addQuoteButton");

let quoteArray = [
    {
        quote: "If my mind can conceive it and my heart can believe it, then I can achieve it.",
        author: "Muhammad Ali"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        quote: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
        author: "Jordan Belfort"
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Strive not to be a thing of success, but rather to be a thing of value.",
        author: "Albert Einstein"
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
    },
    {
        quote: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu"
    }
]

let randomNumberQuotes = Math.floor(Math.random() * quoteArray.length);

let quoteFunction = function() {
    quoteHTML.textContent = `"${quoteArray[randomNumberQuotes].quote}"`;
    quoteAuthorHTML.textContent = quoteArray[randomNumberQuotes].author;
}

quoteFunction();
// setInterval(quoteFunction(), 36000000);

openQuoteAddButton.eventListener("click", function() {
    addQuoteContainer.classList.toggle("hide");
})


addQuoteButton.eventListener("click", function() {
    if (addQuoteInput.value !== "" && addAuthorInput.value !== "") {
        quoteArray.unshift({
            quote: addQuoteInput.value,
            author: addAuthorInput.value
        });
        quoteHTML.textContent = `"${quoteArray[0].quote}"`;
        quoteAuthorHTML.textContent = quoteArray[0].author;
        addQuoteInput.value = "";
        addAuthorInput.value = "";
        quoteAddContainer.classList.toggle("hide");
    } else if (addQuoteInput.value !== "" && addAuthorInput.value === "") {
        quoteArray.unshift({
            quote: addQuoteInput.value,
            author: "Unknown"
        });
        quoteHTML.textContent = `"${quoteArray[0].quote}"`;
        quoteAuthorHTML.textContent = quoteArray[0].author;
        addQuoteInput.value = "";
        addAuthorInput.value = "";
        quoteAddContainer.classList.toggle("hide");
    }
})