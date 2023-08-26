function flipHexBytes() {
  var text = document.getElementById("inputField").value;

  let flippedHex = "";
  for (let i = text.length - 2; i >= 0; i -= 2) {
    flippedHex += text.substr(i, 2);
  }

  document.getElementById("output").textContent = flippedHex;
}