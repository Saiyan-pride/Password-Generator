function generatePassword() {
    const length = document.getElementById("length").value;
    const includeLower = document.getElementById("includeLower").checked;
    const includeUpper = document.getElementById("includeUpper").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;

    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "_.$%&^!#*@";

    let allChars = "";
    if (includeLower) allChars += lowerChars;
    if (includeUpper) allChars += upperChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSymbols) allChars += symbolChars;

    if (allChars === "") {
        alert("Please select at least one character type!");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    document.getElementById("password").value = password;
}

function copyPassword() {
    const passwordField = document.getElementById("password");
    if (!passwordField.value) {
        alert("No password to copy!");
        return;
    }
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}
