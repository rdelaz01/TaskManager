//function hello() {
//   console.log("Hello, World!");
//}


//// An example of changing logic exec
function saveTask() {
    console.log("saving task");

    const title = $("#txtTitle").val();
    const description = $("#txtDescription").val();
    const color = $("#selColor").val();
    const date = $("#selDate").val();
    const status = $("#selStatus").val();
    const budget = $("#numBudget").val();
    //create new task object
    const task = new Task(title, description, color, date, status, budget);
    console.log(task);
    displayTask(task);

}

    function displayTask(task) {
        let syntax = `

    <div class="task" style="border-color:${task.color}">

    <div class="info">

        <h4>${task.title}</h4>

        <p>${task.desc}</p>

    </div>

    <label class="status">${task.status}</label>

    <div class="date-budget">

        <label>Due: ${task.date}</label>

        <label>Budget: $${task.budget}</label>

    </div>

    </div>`;



        // Inject the new HTML into the DOM Tree

        $(".list").append(syntax);
    }

// define the URL of the server
const API = "https://106api-b0bnggbsgnezbzcz.westus3-01.azurewebsites.net/api/tasks";

function loadTask(){

    $.ajax({
        type:"GET", //HTTP method to -READ
        url: API, 
        success: function(data){
            console.log("Data received", data);
        }, 
        error: function(error){
            console.log("Error", error);
        }

    })
}



function init() {
    $("#btnSave").click(saveTask);
    //load data from the server 
    loadTask();
}
//force my logic to run the html and css first  - and when they finsh
//will be executed 

window.onload = init;  