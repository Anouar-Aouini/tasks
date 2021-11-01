let listContainer = document.getElementById("newElement");

let addBtn = document.getElementById('add-task');
let tasks = JSON.parse(localStorage.getItem("post"));
addBtn.addEventListener('click', function () {
    var addText = document.getElementsByClassName("add")[0].value;
    if (addText === "") {
        return;
    }
    tasks.push(addText)
    localStorage.setItem("post", JSON.stringify(tasks));
    document.getElementsByClassName("add")[0].value = "";
})
