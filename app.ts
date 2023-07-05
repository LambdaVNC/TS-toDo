const form = document.querySelector<HTMLFormElement>("#form");
const input = document.getElementById("input") as HTMLInputElement;
const button = document.querySelector<HTMLButtonElement>("#button");
const taskList = document.querySelector<HTMLDivElement>(".taskList");

type Task = {
  text: string;
  createdAt: Date;
};

let taskArray: Array<Task> = [];

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(input.value);

  const newTask: Task = {
    text: input.value,
    createdAt: new Date(),
  };

  addListItem(newTask);
});

const addListItem = (task: Task): void => {
  // Create Card Div
  const CardDiv = document.createElement("div");
  CardDiv.classList.add("card");
  CardDiv.classList.add("m-5");

  // Create Card Body Div
  const CBodyDiv = document.createElement("div");
  CBodyDiv.classList.add("card-body");
  CBodyDiv.classList.add("d-flex");
  CBodyDiv.classList.add("justify-content-between");
  CardDiv.appendChild(CBodyDiv);

  // Create P element and append Card Div
  const strong = document.createElement("strong");
  strong.innerText = task.text;
  CBodyDiv.appendChild(strong);

  //   Create p for Date
  const dateForP = document.createElement("p");
  const date = task.createdAt.toString();
  dateForP.innerText = date;
  CBodyDiv.appendChild(dateForP);

  taskList?.appendChild(CardDiv);
};
