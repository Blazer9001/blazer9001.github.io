function scream() {
    document.getElementById("inputField").value = "";

    let scream = new Audio("/assets/audio/scream.mp3");
    scream.play();
}