const input = document.getElementById("user-input");
const results = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const regex1 = /[0-9]{10}/;

const regexArray = [regex1];

const isValidNumber = (input) => {
  const isValid = regexArray.some(regex => regex.test(input));
  if (isValid) {
    results.innerText += `Valid US number: ${input}`;
  } else {
    results.innerText += `Invalid US number: ${input}`;
  }
};

const checkNumber = () => {
  if (input.value === "") {
    alert("Please provide a phone number");
  } else {
    isValidNumber(input.value);
  }
};

checkBtn.addEventListener("click", checkNumber);
checkBtn.addEventListener("keydown", (e) => {
  if(e.key === "Enter") {
    checkNumber();
  };
});

clearBtn.addEventListener("click", () => {
  results.innerText = "";
});