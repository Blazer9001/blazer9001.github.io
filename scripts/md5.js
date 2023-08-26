function md5() {
    var text = document.getElementById("inputField").value;
    const hash = CryptoJS.MD5(text).toString();
    document.getElementById("output").textContent = hash;
}