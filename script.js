console.log(`The JS works!`);

const blob = document.getElementById("blob");
const submitButton = document.getElementById("sumbit");

const borderRadius = document.getElementById("border-radius");
const copyCodeButton = document.getElementById("copyCode");



borderRadius.oninput = function () {
    blob.style.borderRadius = `${borderRadius.value}px`;
}



