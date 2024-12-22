const decInp = document.getElementById("dec-inp");
const binInp = document.getElementById("bin-inp");
const errorMsg = document.getElementById("error-msg");
const clearBtn = document.getElementById("clear-btn"); 

decInp.addEventListener("input", () => {
  const decValue = parseInt(decInp.value.trim());
  
  if (Number.isInteger(decValue) && decValue >= 0) {
   
    binInp.value = decValue.toString(2);
    errorMsg.textContent = ""; 
  } else {
    
    binInp.value = "";
    errorMsg.textContent = "Please enter a valid non-negative integer.";
  }
});

binInp.addEventListener("input", () => {
  const binValue = binInp.value.trim();

  if (binValidator(binValue)) {
    decInp.value = parseInt(binValue, 2);
    errorMsg.textContent = ""; 
  } else {
    decInp.value = ""; 
    errorMsg.textContent = "Please enter a valid binary number (only 0s and 1s).";
  }
});

function binValidator(num) {

  return /^[01]+$/.test(num); //to check if the string contains only 0s and 1s
}
clearBtn.addEventListener("click", () => {
  decInp.value = ""; 
  binInp.value = ""; 
  errorMsg.textContent = ""; 
});