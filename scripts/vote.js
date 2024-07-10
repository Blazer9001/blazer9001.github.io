function vote() {
    var grand = document.querySelector('input[name="vote_choice"]:checked').value;

    const votingbox = document.getElementById("ballotbox");
    votingbox.style.display = "none";

    const label = document.getElementById("grunga");

    if (grand == "COLOR"){
        label.innerHTML = document.getElementById("votecolor111").value;
    } else if (grand == "IMAGE"){
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("glarno").src = e.target.result;
        }

        if (document.getElementById("fileadd111").files[0]) {
            reader.readAsDataURL(document.getElementById("fileadd111").files[0]);
        }

        label.innerHTML = "that";
    } else {
        label.innerHTML = grand;
    }

    const altdiv = document.getElementById("altdiv");
    altdiv.style.display = "";

    const button = document.getElementById("button");
    button.style.display = "none";
}

