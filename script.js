console.log(`The JS works!`);

const blob = document.getElementById("blob");
const submitButton = document.getElementById("sumbit");

const borderRadius = document.getElementById("border-radius");
const showBorderRadiusValue = document.getElementById("border-radius-value");




borderRadius.oninput = function () {
    showBorderRadiusValue.innerHTML = borderRadius.value;
}


const borderRadiusValue = "80px";


function changeValue(e) {
    e.preventDefault();
    blob.style.borderRadius = borderRadiusValue;
}

submitButton.addEventListener('click', changeValue);

