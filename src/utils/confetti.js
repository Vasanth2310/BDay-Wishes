import confetti from 'canvas-confetti';

export const triggerFullCelebration = () => {
  // Fire confetti from left and right corners
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    colors: ['#ff6b9d', '#ff9ebb', '#c084fc', '#e879f9', '#ffd166', '#f472b6', '#fed7aa', '#ffffff']
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio)
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};

export const triggerHeartConfetti = () => {
  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0.5,
    decay: 0.94,
    startVelocity: 30,
    shapes: ['star', 'circle'],
    colors: ['#ff70a6', '#ff9770', '#ffd670', '#e9ff70', '#70d6ff', '#e0aaff', '#ffc6ff']
  };

  confetti({
    ...defaults,
    particleCount: 50,
    scalar: 1.2
  });
  confetti({
    ...defaults,
    particleCount: 30,
    scalar: 0.75
  });
};

export const triggerCandleWishConfetti = () => {
  confetti({
    particleCount: 120,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: ['#ff758c', '#ff7eb3', '#fbc2eb', '#a18cd1', '#f6d365']
  });
  confetti({
    particleCount: 120,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: ['#ff758c', '#ff7eb3', '#fbc2eb', '#a18cd1', '#f6d365']
  });
};

export const triggerContinuousConfetti = (duration = 3000) => {
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 40 * (timeLeft / duration);
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
  }, 250);
};

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

