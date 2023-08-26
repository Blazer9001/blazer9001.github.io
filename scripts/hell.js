function scream() {
    document.getElementById("inputField").value = "";

    let scream = new Audio("/assets/scream.mp3");
    scream.play();
}