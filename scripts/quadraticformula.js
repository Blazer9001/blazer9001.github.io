function quad() {
    var root1, root2;

    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);

    var discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        document.getElementById("roots").textContent = `The roots are: ${root1} and ${root2}`;
    } else if (discriminant == 0) {
        root1 = root2 = -b / (2 * a);

        document.getElementById("roots").textContent = `The roots are: ${root1} and ${root2}`;
    } else {
        let realPart = (-b / (2 * a)).toFixed(2);
        let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

        document.getElementById("roots").textContent = `The roots are: ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`;
    }

}