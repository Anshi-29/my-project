// First textarea
const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");

textInput.addEventListener("input", () => {
  charCount.textContent = textInput.value.length;
});

// Second textarea (pre-filled example)
const textInput2 = document.getElementById("textInput2");
const charCount2 = document.getElementById("charCount2");

textInput2.addEventListener("input", () => {
  charCount2.textContent = textInput2.value.length;
});
