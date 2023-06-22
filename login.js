const idArr = ["apple", "banana", "orange"];
const pwArr = [1111, 2222, 3333];

const checkID = document.querySelector("#id");
const checkPW = document.querySelector("#pw");

const id = checkID.value;
const pw = checkPW.value;

function login() {
  //   const id = checkID.value;
  //   const pw = checkPW.value;

  //   const idIndex = idArr.findIndex((id) => id === id);

  //   if (pwArr[idIndex] === pw) {
  //     location.href = "success.html";
  //   }
  //   if (id === "apple") {
  //     location.href = "success.html";
  //   }
  location.href = "success.html";
}
