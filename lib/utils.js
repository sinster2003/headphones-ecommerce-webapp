import confetti from "canvas-confetti";

const getConfetti = () => {
  var end = Date.now() + 10 * 1000;

  var colors = ["#7b42c7", "#e0fa6b"];

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};

export default getConfetti;