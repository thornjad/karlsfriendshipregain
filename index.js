
import confetti from 'canvas-confetti';


// cannons 
const end = Date.now() + 60 * 1000;

const frame = () => {
	confetti({
		particleCount: 2,
		angle: 60,
		spread: 55,
		origin: { x: 0 },
		colors: ['#235DB2', '#BF342C']
	});
	confetti({
		particleCount: 2,
		angle: 120,
		spread: 55,
		origin: { x: 1 },
		colors: ['#396A95', '#FDC133']
	});

	if (Date.now() < end) {
		requestAnimationFrame(frame);
	}
};

frame();

// fireworks

var duration = 60 * 1000;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}
var interval = setInterval(function() {
  var timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  var particleCount = 50 * (timeLeft / duration);
  // since particles fall down, start a bit higher than random
  confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
  confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
}, 500);