let inputField = document.querySelector(".card form input");
let submitBtn = document.querySelector(".card form button");
let form = document.querySelector(".card form");
let cardContainer = document.querySelector(".card > div");
let successCard = document.querySelector("#success");
let msg = document.getElementById("errorMsg");
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (inputField.value === "" || emailRegex.test(inputField.value) === false) {
    inputField.style.backgroundColor = "pink";
    msg.style.visibility = "visible";
  } else {
    cardContainer.className = "close";
    successCard.className = "success";
  }
});
let mailSent = document.querySelector("#mailSent");

inputField.addEventListener("input", function (event) {
  inputField.style.backgroundColor = "white";
  msg.style.visibility = "hidden";
  mailSent.innerHTML = event.target.value;
});

let dismissBtn = document.querySelector("#dismiss");
dismissBtn.addEventListener("click", function () {
  cardContainer.className = "container";
  successCard.className = "close";
});
function fibunicciGenarator(sum) {
  let array = [];
  for (let i = 0; i < sum; i++) {
    if (array[array.length - 1] + array[array.length - 2] === sum) {
      break;
    }
    else {
      if (array.length > 1) {
        array.push(array[array.length - 1] + array[array.length - 2]);
      } else {
        array.push(i);
      }
    }
  }
  return array;
}
let output = fibGen(5);
console.log(output);
