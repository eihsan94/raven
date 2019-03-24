/* eslint-disable require-jsdoc */
function clock() {
  // calculate angle
  const d = new Date;
  let h = 30 * ((d.getHours() % 12) + d.getMinutes() / 60);
  const m = 6 * d.getMinutes();
  const s = 6 * d.getSeconds();
  console.log(h);
  // move hands
  setAttr('h-hand', h);
  setAttr('m-hand', m);
  setAttr('s-hand', s);
  setAttr('s-tail', s+180);

  if (h !== 12) {
    h %= 12;
  }

  // call every second
  setTimeout(clock, 1000);
};

function setAttr(id, val) {
  const v = 'rotate(' + val + ', 140, 140)';
  document.getElementById(id).setAttribute('transform', v);
};

// 全てのウェブ部分が表示された時に動かす初期化の関数
document.addEventListener('DOMContentLoaded', function() {
  console.log('All assets are loaded');
  clock();
});

let x;
let y;
const rad = 140;
const divisions = 12;
const degreesPerIter = 360 / divisions;
const startAngleDeg = 90;
for (i = 1; i < divisions + 1; i++) {
  const angleDeg = (startAngleDeg + (i * degreesPerIter)) % 360;

  x = rad * Math.cos(angleDeg * Math.PI/180);
  console.log((angleDeg));
  y = rad * Math.sin(angleDeg * Math.PI/180);
  console.log(`coordinates of the 12 o'clock mark are ${i} o'clock (${x}, ${y}) `);
}
