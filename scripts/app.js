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
    
    // Send to the server
    $.ajax({
        type:"POST", //HTTP Verb: to create
        url:API,
        data:JSON.stringify(task),
        contentType:"application/json",
        success: function(created){
            displayTask(task);
            console.log(created);
        },
        error: function(error){
            console.log(error);
        }
    })


}

//minichallenge 
//use put method to update one of the existig entrys
//tip: you must use the ID - url: API/ # -- https://106api-b0bnggbsgnezbzcz.westus3-01.azurewebsites.net/api/tasks
//try to modify  the entry with ID=1, using a title that says "Hello my name is - your name"

function changeName(){
    $.ajax({
        type:"PUT",
        url:API + "/1",
        data: JSON.stringify({title:"Hello my name is Rollie"}),
        contentType: "aplication/json",
        success: function(updated){
        console.log(updated);
        },
        error: function(error){
            console.log(error);
        }
    })
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
        dataType: "json", //Expected format
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