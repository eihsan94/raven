/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

function colorChange(event) {
  const imageContainerElement = document.querySelector('.image-container');
  const currentColor = event.srcElement.value;
  imageContainerElement.style.backgroundColor = currentColor;
}
function blurChange(event) {
  const imageElement = document.querySelector('.image');
  currentBlurValue = event.srcElement.value;
  console.log(`blur(${currentBlurValue})`);
  imageElement.style.filter = `blur(${currentBlurValue - 1}px)`;
  imageElement.style.WebkitFilter = `blur(${currentBlurValue - 1}px)`;
}

function spacingChange(event) {
  const imageElement = document.querySelector('.image');
  const currentSpace = event.srcElement.value;
  imageElement.style.marginLeft = `${currentSpace}px`;
  imageElement.style.marginTop = `${currentSpace}px`;
}
