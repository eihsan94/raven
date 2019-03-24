/* eslint-disable no-unused-vars */

// カーソルからのクリック
/**
 * Play sound base on the soundName.
 * @param {string} keyboardLetter The sound type.
 */
function playSound(keyboardLetter) {
  const audio = document.getElementById(keyboardLetter);
  audio.currentTime = 0; // reset the play time
  audio.play();
}

// KEYBOARDからのイベント
document.addEventListener('keydown', (event) => { // 押すときのイベント
  const key = (event.key || event.keyCode).toLowerCase();
  const audio = document.getElementById(key);
  const keybox = document.getElementById(`${key}-box`);
  if (audio) {
    audio.currentTime = 0; // reset the play time
    audio.play();
    keybox.classList.add('pressed');
  }
});
document.addEventListener('keyup', (event) => {// 離すときのイベント
  const key = (event.key || event.keyCode).toLowerCase();
  const audio = document.getElementById(key);
  const keybox = document.getElementById(`${key}-box`);
  if (audio) {
    keybox.classList.remove('pressed');
  }
});
