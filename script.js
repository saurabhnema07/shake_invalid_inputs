function shakeInvalidInputs() {
  const ageInput = document.getElementById("userAge");
  const errorMessage = document.getElementById("invalid_input");
  const age = Number(ageInput.value);

  if (!age) {
    console.log("Invalid age"); // invalid age
    errorMessage.style.visibility = "visible";
    ageInput.classList.add("shake");
  } else {
    console.log("Valid age"); // valid age
  }

  setTimeout(() => {
    errorMessage.style.visibility = "hidden";
    ageInput.classList.remove("shake");
  }, 500);
}
