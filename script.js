console.log(`The JS works!`);

const blob = document.getElementById("blob");
const borderRadius = document.getElementById("border-radius");
const color = document.getElementById("color");
const copyCodeButton = document.getElementById("copyCode");



//---border
//function that changes the blob after the user changed the value of the slider
borderRadius.oninput = function () {
    blob.style.borderRadius = `${borderRadius.value}px`;
};





//function that creates the code based on the user input.
function createCode() {
    code = `
    #blob{
      width: 10rem;
      height: 10rem;
      background-color: #2e2e31;
      border-radius: ${borderRadius.value}px;
    }
    `;
};


//function that copies the code
function copyCode() {

    createCode();

    this.copied = false

    // Create textarea element
    const textarea = document.createElement('textarea')

    // Set the value of the text
    textarea.value = code;

    // Make sure we cant change the text of the textarea
    textarea.setAttribute('readonly', '');

    // Hide the textarea off the screnn
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';

    // Add the textarea to the page
    document.body.appendChild(textarea);

    // Copy the textarea
    textarea.select()

    try {
        var successful = document.execCommand('copy');
        this.copied = true
    } catch (err) {
        this.copied = false
    };

    textarea.remove()

};

copyCodeButton.addEventListener('click', copyCode);

