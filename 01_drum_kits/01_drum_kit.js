/* eslint-disable no-unused-vars */
/**
 * Play sound base on the soundName.
 * @param {string} soundName The sound type.
 */
function playSound(soundName) {
  const audio = document.getElementById(soundName);
  audio.currentTime = 0; // reset the play time
  audio.play();
}
// 次回
window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key]='${e.keyCode}'`);
  audio.currentTime = 0; // reset the play time
  audio.play();
});
