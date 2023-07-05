var form = document.querySelector("#form");
var input = document.getElementById("input");
var button = document.querySelector("#button");
var taskList = document.querySelector(".taskList");
var taskArray = [];
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(input.value);
    var newTask = {
        text: input.value,
        createdAt: new Date(),
    };
    addListItem(newTask);
});
var addListItem = function (task) {
    // Create Card Div
    var CardDiv = document.createElement("div");
    CardDiv.classList.add("card");
    CardDiv.classList.add("m-5");
    // Create Card Body Div
    var CBodyDiv = document.createElement("div");
    CBodyDiv.classList.add("card-body");
    CBodyDiv.classList.add("d-flex");
    CBodyDiv.classList.add("justify-content-between");
    CardDiv.appendChild(CBodyDiv);
    // Create P element and append Card Div
    var strong = document.createElement("strong");
    strong.innerText = task.text;
    CBodyDiv.appendChild(strong);
    //   Create p for Date
    var dateForP = document.createElement("p");
    var date = task.createdAt.toString();
    dateForP.innerText = date;
    CBodyDiv.appendChild(dateForP);
    taskList === null || taskList === void 0 ? void 0 : taskList.appendChild(CardDiv);
};
