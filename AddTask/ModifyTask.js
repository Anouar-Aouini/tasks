let ModifyElement = document.getElementById("modifyElements");
let tasks = JSON.parse(localStorage.getItem("post"))

function edit(i) {
    let editedTask = document.getElementById("add").value;
    if (editedTask.length > 0) {
      tasks[i] = editedTask;  
    }
    
    localStorage.setItem("post", JSON.stringify(tasks));
    let tasks1 = JSON.parse(localStorage.getItem("post"))
    document.getElementById("modifyElements").innerHTML="";
    showTasks(tasks1)
}

showTasks(tasks);

    function deleteOne(i) {
        tasks = tasks.filter((el, ind) => ind != i)
        localStorage.setItem("post", JSON.stringify(tasks));
        JSON.parse(localStorage.getItem("post"))
        document.getElementById("modifyElements").innerHTML = "";
        showTasks(tasks)
    }
function showTasks(tasks) {

    if (tasks.length > 0) {
    for (let i = 0; i < tasks.length; i++) {
        const newTask = document.createElement("div");
        const listContent = document.createTextNode(tasks[i]);
        newTask.innerHTML = `<div class="row">
        <h1>${tasks[i]}</h1><div>
        <button onclick="edit('${i}')" class='btn btn-primary'>Edit</button>
        <button class="btn btn-danger" onclick="deleteOne('${i}')">Delete</button></div>
        </div>`;
        newTask.appendChild(listContent);
        ModifyElement.appendChild(newTask);
    }
}}





