function gogogadget() {

    var selectElement = document.getElementById("length");
    var selectedLength = selectElement.value;
    var password = generatePassword(selectedLength);

    document.getElementById("password").value = password;
}

function generatePassword(length) {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&?";
    var password = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }
    return password;
}

function copy() {
    document.getElementById("copy").addEventListener("click", function () {
        var textBox = document.getElementById("password");

        textBox.select();
        textBox.setSelectionRange(0, 99999);

        document.execCommand("copy");
    });
}