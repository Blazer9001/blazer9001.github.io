function scream() {
    document.getElementById("inputField").value = "";

    let scream = new Audio("/eternalvoidofhell/scream.mp3");
    scream.play();
}