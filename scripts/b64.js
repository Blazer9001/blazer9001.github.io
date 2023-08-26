function b64Encode() {
    try {
        var text = document.getElementById("decInput").value;

        enc = btoa(text);

        document.getElementById("enc").textContent = enc;
    } catch (error) {
        if (error instanceof DOMException) {
            document.getElementById("enc").textContent = "ascii only"
        }
    }
}

function b64Decode() {
    try {
        var text = document.getElementById("encInput").value;

        dec = atob(text);

        document.getElementById("dec").textContent = dec;
    } catch (error) {
        if (error instanceof DOMException) {
            document.getElementById("dec").textContent = "i said ascii only"
        }
    }
}