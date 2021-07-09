console.log(`The JS works!`);

const blob = document.getElementById("blob");
const submitButton = document.getElementById("sumbit");

const borderRadius = document.getElementById("border-radius");
const copyCodeButton = document.getElementById("copyCode");



borderRadius.oninput = function () {
    blob.style.borderRadius = `${borderRadius.value}px`;
}



//function that copies the css code to the clipboard
function copyCode() {
    console.log(`copy code`);
    code = `
    #blob{
      width: 10rem;
      height: 10rem;
      background-color: #2e2e31;
      border-radius: ${borderRadius.value}px;
    }
    `;
    console.log(code);
};

copyCodeButton.addEventListener('click', copyCode);

