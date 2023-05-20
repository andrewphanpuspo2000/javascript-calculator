const getElement = document.querySelectorAll(".wrapper > .btn ");
let showinput = document.getElementById("show");
let stringDisplay = "";
let lastSign = "";

const audio = new Audio("./aa.wav");

const arrOperator = ["-", "+", "/", "*"];
getElement.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.background = "red";
  });
  item.addEventListener("mouseout", () => {
    item.style.background = "blue";
  });
  if (item.innerText != "AC" && item.innerText != "C") {
    item.addEventListener("click", () => {
      if (arrOperator.includes(item.innerText) && !stringDisplay.length) {
        return;
      }

      if (arrOperator.includes(item.innerText)) {
        lastSign = item.innerText;
        console.log("stringtodisplay:", stringDisplay);
        console.log("LatestOpeartor:", lastSign);
        const lastCharacter = stringDisplay.slice(-1);
        console.log("lastcharacter:", lastCharacter);

        // if (arrOperator.includes(lastSign)) {
        //   stringDisplay = stringDisplay.slice(0, -1);
        // }
      }
      if (item.innerText === ".") {
        const indexOfLastOperator = stringDisplay.lastIndexOf(lastSign);
        const lastNumberSet = stringDisplay.slice(indexOfLastOperator);
        console.log(indexOfLastOperator);
        console.log(lastNumberSet);

        if (lastNumberSet.includes(".")) {
          return;
        }
        if (!lastSign && stringDisplay.includes(".")) return;
      }

      if (item.innerText === "=") {
        const lastCharacter = stringDisplay.slice(-1);
        if (arrOperator.includes(lastCharacter)) {
          stringDisplay = stringDisplay.slice(0, -1);
        }
        let result = Math.round(eval(stringDisplay)).toString();
        stringDisplay = result;
        audio.play();
      }

      if (item.innerText != "=") stringDisplay += item.innerText;
      displayString(stringDisplay);
    });
  }
  let deleteinput = document.getElementById("delete");

  deleteinput.addEventListener("click", deleteAll);

  let deleteLast = document.querySelector(".c");

  deleteLast.addEventListener("click", deleteLastIndex);
});

function deleteLastIndex() {
  stringDisplay = stringDisplay.slice(0, -1);
  showinput.innerText = stringDisplay;
}

function deleteAll() {
  console.log("test", showinput);
  stringDisplay = "";
  showinput.innerText = stringDisplay || 0;
}

const displayString = (val) => {
  showinput.innerText = val || 0;
};
