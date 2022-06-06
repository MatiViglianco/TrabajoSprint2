let button = document.getElementsByClassName("btn btn-danger");
const container = document.getElementById("container");

function printValues() {
  const h3 = document.createElement("h3");
  const value = getValues(csv);
  h3.innerText = value;
  container.append(h3);
}

function wiev(event) {
  let text = document.getElementById("text");
  let numb = document.getElementById("numb");

  console.log(text.value);
  console.log(numb.value);

  document.getElementById("text").value = "";
  document.getElementById("numb").value = "";
}
