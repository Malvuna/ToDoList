let list = document.querySelector("#list");

let element = document.createElement("div");
element.className = "element";

let check = document.createElement("div");
check.className = "check";

let text = document.createElement("div");
text.className = "text";

let close = document.createElement("div");
close.className = "close";

list.append(element);
element.append(check);
element.append(text);
element.append(close);

let checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.name = "test";
check.append(checkbox);

let input = document.createElement("label");
input.type = "label";
input.name = "test";
text.append(input);

let deleteElem = document.createElement("p");
deleteElem.innerHTML = "X";
close.append(deleteElem);
