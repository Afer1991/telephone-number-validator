const input = document.getElementById("user-input");
const results = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const checkNumber = () => {
  if (input.value === "") {
    alert("Please provide a phone number");
  }
};

checkBtn.addEventListener("click", checkNumber);
checkBtn.addEventListener("keydown", (e) => {
  if(e.key === "Enter") {
    checkNumber();
  };
});