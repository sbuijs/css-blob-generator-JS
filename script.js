console.log(`The JS works!`);

const blob = document.getElementById("blob");
const borderRadius = document.getElementById("border-radius");
const color = document.getElementById("color");
const image = document.getElementById("image");

const copyCodeButton = document.getElementById("copyCode");
const animateButton = document.getElementById("animate");
const resetBlobButton = document.getElementById("reset");

const defaultBorderRadius = '0';
const defaultColor = '#000';
const defaultSize = '100';
// const defaultImageBackground;


//functions that changes the blob after the user changed the value of the input
borderRadius.oninput = function () {
    blob.style.borderRadius = `${borderRadius.value}%`;

};
color.oninput = function () {
    blob.style.backgroundColor = `${color.value}`;
};


size.oninput = function () {
    blob.style.width = `${size.value}px`;
    blob.style.height = `${size.value}px`;
};

image.oninput = function () {
    blob.style.backgroundImage = `url(${image.value})`;
    console.log(`test`);
};


//function that creates the code based on the user input.
function createCode() {
    code = `
    <div id="blob"></div>

    #blob{
      width: ${size.value}px;
      height: ${size.value}px;
      background-color: ${color.value};
      border-radius: ${borderRadius.value}px;
    }
    `;

    if (blob.classList.contains("animate")) {
        console.log(`contains animate!`);
        code = `
    <div id="blob"></div>

    #blob{
      width: ${size.value}px;
      height: ${size.value}px;
      background-color: ${color.value};
      border-radius: ${borderRadius.value}px;
    }

    .animate{
    animation: jump 2s infinite;
    }


    @keyframes jump {
    0%   { transform: scale(1)   translate(0, -50%); }
    50%   { transform: scale(1)   translate(0, 0%); }
    100%   { transform: scale(1)   translate(0, -50%); }
    };
    `;
    }

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

//turn animation on/off
function addAnimation() {
    blob.classList.toggle("animate");

    if (animateButton.innerHTML === "Turn animation ON") {
        animateButton.innerHTML = "Turn animation OFF";
    } else {
        animateButton.innerHTML = "Turn animation ON";
    }
};


//function that resets the valu
function resetBlob() {
    borderRadius.value = defaultBorderRadius;
    blob.style.borderRadius = `${defaultBorderRadius}px`;
    color.value = defaultColor;
    blob.style.backgroundColor = `${defaultColor}`;
    size.value = defaultSize;
    blob.style.width = `${defaultSize}`;
    blob.style.height = `${defaultSize}`;
    blob.classList.remove("animate");
    animateButton.innerHTML = "Turn animation ON";
};



//Event listerners
copyCodeButton.addEventListener('click', copyCode);
resetBlobButton.addEventListener('click', resetBlob);
animateButton.addEventListener('click', addAnimation);

