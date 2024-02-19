let text = document.querySelector(".text");
let buttons = document.querySelectorAll("button");
let ops = document.querySelectorAll(".op")

let num1 = "";

let num2 = "";

let result = "";

let active = true;

let operation = null;

let active2 = false;

text.innerHTML = 0;

buttons.forEach((e) => {
  e.addEventListener("click", (a) => {
    if (a.target.classList.contains("number")) {
      if (active) {

        num1 += a.target.textContent;
        text.innerHTML = num1;

      } else {

        num2 += a.target.textContent;
        text.innerHTML = num2;

      }
    } else if (a.target.id == "clear") {
        ops.forEach(b => {
            b.style.backgroundColor =""
            b.style.color = ""
        })

      num1 = "";
      num2 = "";
      result = "";
      active = true;
      active2 = false;
      text.innerHTML = 0;

    } else if (a.target.classList.contains("op")) {
      
        ops.forEach(b => {
            b.style.backgroundColor =""
            b.style.color = ""
        })
       
      a.target.style.backgroundColor = "white"
      a.target.style.color = "black"
      active = false;

      if (active2) {

        calc();

      }

      operation = a.target.textContent;

      active2 = true;
    } else if (a.target.id == "result") {
      calc();
    }
  });
});

function calc() {

  if (operation == "+") {

    if (num2 != "") {
        
      result = +num1 + +num2;
      num1 = result;
      num2 = "";

      text.innerHTML = result;
    }


  } else if (operation == "-") {

    if (num2 != "") {

      result = +num1 - +num2;
      num1 = result;
      num2 = "";

      text.innerHTML = result;
    }

  } else if (operation == "X") {

    if (num2 != "") {

      result = +num1 * +num2;
      num1 = result;
      num2 = "";
      text.innerHTML = result;

    }

  } else {

    if (num2 != "") {
      result = +num1 / +num2;
      num1 = result;
      num2 = "";
      text.innerHTML = result;
    }

  }
}






