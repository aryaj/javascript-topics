/* const listItems = document.querySelectorAll("li");
const listItems2 = document.getElementsByName("li");
console.log(listItems2);
document.querySelector("li").remove();

for (list of listItems) {
  console.dir(list);
}

for (list of listItems2) {
  console.dir(list);
} */

//const task1 = document.getElementById("task-1");
const task1 = document.querySelector("#task-1");

task1.style.backgroundColor = "black";
task1.style.color = "white";

//const task2 = document.querySelector("title");
const task2 = document.querySelector("head title");
task2.textContent = "Assignment Solved";

const task3 = document.querySelector("h1");
task3.textContent = "Assignment Solved";
