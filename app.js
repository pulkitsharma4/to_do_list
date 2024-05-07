
let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = input.value;
  let delbtn = document.createElement("button");
  delbtn.innerText = "remove task";
 
  delbtn.classList.add("delete");
  ul.appendChild(item);
  item.appendChild(delbtn);
  input.value = "";
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let ListItem = event.target.parentElement;
    ListItem.remove();
    console.log("Deleted");
  } 
});


