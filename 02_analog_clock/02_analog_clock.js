/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

function drawHourMemory() {
  for (let i = 1; i <= 12; i++) {
    const svg = document.getElementById('clock-svg'); // Get svg element
    const el = document.createElementNS('http://www.w3.org/2000/svg', 'line'); // Create a line in SVG's namespace // <line></line>
    el.setAttribute('x1', '140'); // Set first stroke first x point // <line x1="140"></line>
    el.setAttribute('y1', '20'); // Set first stroke first y pointt // <line x1="140" y1="20"></line>
    el.setAttribute('x2', '140'); // Set first stroke second x point// <line x1="140" y1="20" x2="140"></line>
    el.setAttribute('y2', '40'); // Set first stroke second y point // <line x1="140" y1="20" x2="140" y2="40"></line>
    el.setAttribute('id', 'tick'); // <line x1="140" y1="20" x2="140" y2="40" id="tick"></line>
    el.setAttribute('transform', `rotate(${(i*360/12)} 140 140)`);
    svg.appendChild(el);
  }
}

// initialisation 全てのウェブ部分が表示された時に動かす初期化の関数
document.addEventListener('DOMContentLoaded', function() {
  drawHourMemory(); // 時間のメモリを書く
});

function rotateClock(id, val) {
  const v = `rotate(${val}, 140, 140)`;
  document.getElementById(id).setAttribute('transform', v);
}

function clockTick() {
  // now
  const now = new Date();
  // midnight
  const then = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
  const d = new Date;
  const h = 30 * ((d.getHours() % 12) + d.getMinutes() / 60);
  const m = 6 * ((d.getMinutes()) + d.getSeconds() / 60);
  const diffInMil = (now.getTime() - then.getTime());// difference in milliseconds
  const s = (diffInMil / 1000); // ms => seconds
  // move clock hands
  rotateClock('h-hand', h);
  rotateClock('m-hand', m);
  rotateClock('s-hand', s*6);
  rotateClock('s-tail', (s*6)+180);
}

// run the clock
function runClock() {
  clockTick();
  window.requestAnimationFrame(runClock);
}

// Perform an animation and requests that the browser call
window.requestAnimationFrame(runClock);
