const input = document.getElementById("user-input");
const results = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const regex1 = /^[0-9]{10}$/;
const regex2 = /^(1\s)?[0-9]{3}(-|\s)[0-9]{3}(-|\s)[0-9]{4}$/;
const regex3 = /^1?\s?\([0-9]{3}\)\s?[0-9]{3}-[0-9]{4}$/;

const regexArray = [regex1, regex2, regex3];

const isValidNumber = (input) => {
  const isValid = regexArray.some(regex => regex.test(input));
  if (isValid) {
    results.innerHTML += `<p class="valid">Valid US number: ${input}</p>`;
  } else {
    results.innerHTML += `<p class="invalid">Invalid US number: ${input}</p>`;
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
input.addEventListener("keydown", (e) => {
  if(e.key === "Enter") {
    checkNumber();
  };
});

clearBtn.addEventListener("click", () => {
  results.innerText = "";
});