let button = document.getElementsByClassName("btn btn-danger");
let personNum = [];
let total = 0;
let totalpay = document.getElementById("totalPay");
let totaldiv = document.getElementById("totalDiv");

function validateForm(text, number) {
  let flag = false;
  if (text === "" || number === "") {
    alert("por favor llenar los espacios en blanco");
  } else {
    flag = true;
  }
  return flag;
}

function totalAndDiv(total, div) {
  totalpay.textContent = `TOTAL A PAGAR:$ ${total}`;
  totaldiv.textContent = `A CADA UNO LE TOCA PAGAR: ${div.toFixed(2)}`;
}

function printValues(text, numb) {
  const container = document.querySelector("ul");
  const li = document.createElement("li");
  li.textContent = text + "  $" + numb;
  li.classList.add("list-group-item");
  container.appendChild(li);
}

function validatorNaN(text) {
  let flag = false;
  let ns = text.split("");
  for (const i of ns) {
    if (isNaN(Number(i))) {
      flag = true;
      break;
    }
  }
  if (flag === false) {
    alert("El nombre solo debe contener letras.");
  }
  return flag;
}

function wiew(event) {
  let text = document.getElementById("text").value;
  let numb = document.getElementById("numb").value;
  let noWhite = validateForm(text, numb);

  console.log(total);
  if (noWhite === true && validatorNaN(text)) {
    document.getElementById("text").value = "";
    document.getElementById("numb").value = "";
    if (personNum.indexOf(text) === -1) {
      personNum.push(text);
    }
    total += Number(numb);
    let div = total / personNum.length;
    totalAndDiv(total, div);
    printValues(text, numb);
  }
}
