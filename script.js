// Variables to customize.
let currentWordIndex = 0;
let highWords = ["honest", "aesthetic", "art", "technology"];
let switchTime = 1000;

// Changes the highlighted word.
function changeHighlight() {
  // Set the new highlighted word.
  let elem = document.getElementById("word-highlight");
  elem.innerText = highWords[currentWordIndex];

  // Prepare for the next one.
  currentWordIndex++;
  if (currentWordIndex >= highWords.length) {
    currentWordIndex = 0;
  }
}

// Does stuff when the page loads up.
window.onload = function () {
  setInterval(changeHighlight, switchTime);
};
