/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

// use requestAnimationFrame for smoothness (shimmed with setTimeout fallback)
window.requestAnimFrame = function() {
  return window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 1000 / 60); // set for 60fps
  };
}();

function drawHourTicks() {
  for (let i = 1; i <= 12; i++) {
    const svg = document.getElementById('clock-svg'); // Get svg element
    const el = document.createElementNS('http://www.w3.org/2000/svg', 'line'); // Create a line in SVG's namespace
    el.setAttribute('x1', '140'); // Set first stroke first x point
    el.setAttribute('y1', '20'); // Set first stroke first y point
    el.setAttribute('x2', '140'); // Set first stroke second x point
    el.setAttribute('y2', '40'); // Set first stroke second x point
    el.setAttribute('id', 'tick');
    el.setAttribute('transform', 'rotate(' + (i*360/12) + ' 140 140)');
    svg.appendChild(el);
  }
}

function clockTicking() {
  // now
  const now = new Date();
  // midnight
  const then = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
  const d = new Date;
  const h = 30 * ((d.getHours() % 12) + d.getMinutes() / 60);
  const diffInMil = (now.getTime() - then.getTime());// difference in milliseconds
  const hours = (diffInMil/(1000*60*60)); // hours
  const m = (hours * 60); // minutes
  const s = (m * 60); // seconds
  // move clock hands
  setAttr('h-hand', h);
  setAttr('m-hand', m*6);
  setAttr('s-hand', s*6);
  setAttr('s-tail', (s*6)+180);
}

function setAttr(id, val) {
  const v = 'rotate(' + val + ', 140, 140)';
  document.getElementById(id).setAttribute('transform', v);
}

// 全てのウェブ部分が表示された時に動かす初期化の関数
document.addEventListener('DOMContentLoaded', function() {
  console.log('All assets are loaded');
  drawHourTicks();
  (function loop() {
    requestAnimFrame(loop);
    clockTicking();
  })();
});


// function clock() {
//   // calculate angle
//   const d = new Date;
//   let h = 30 * ((d.getHours() % 12) + d.getMinutes() / 60);
//   const m = 6 * d.getMinutes();
//   const s = 6 * d.getSeconds();
//   // move hands
//   setAttr('h-hand', h);
//   // console.log(h);

//   // setAttr('m-hand', m);
//   // setAttr('s-hand', s);
//   // setAttr('s-tail', s+180);

//   if (h !== 12) {
//     h %= 12;
//   }

//   // call every second
//   setTimeout(clock, 1000);
// }

// // 全てのウェブ部分が表示された時に動かす初期化の関数
// document.addEventListener('DOMContentLoaded', function() {
//   console.log('All assets are loaded');
//   clock();
//   hourTick();
// });