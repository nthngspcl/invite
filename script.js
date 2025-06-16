const weddingDate = new Date('2025-07-20T18:00:00');

  function updateTimer() {
    const now = new Date();
    let diff = weddingDate - now;

    if(diff < 0) diff = 0;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);

    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);

    const seconds = Math.floor(diff / 1000);

    // Обновляем цифры и анимируем

    setDigit('days', Math.floor(days / 10), 'tens');
    setDigit('days', days % 10, 'ones');

    setDigit('hours', Math.floor(hours / 10), 'tens');
    setDigit('hours', hours % 10, 'ones');

    setDigit('minutes', Math.floor(minutes / 10), 'tens');
    setDigit('minutes', minutes % 10, 'ones');

    setDigit('seconds', Math.floor(seconds / 10), 'tens');
    setDigit('seconds', seconds % 10, 'ones');
  }

  function setDigit(part, digit, pos) {
    const wrapper = document.querySelector(`.${part} .${pos} .digit-wrapper`);
    // Высота цифры
    const digitHeight = 180;
    // Смещение по translateY
    wrapper.style.transform = `translateY(${-digit * digitHeight}px)`;
  }

  // Обновлять каждую секунду
  updateTimer();
  setInterval(updateTimer, 1000);

const music = document.getElementById("weddingMusic");
const musicToggle = document.getElementById("musicToggle");
const musicImg = document.getElementById('musicImage');
let isPlaying = true;

musicToggle.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    musicImg.src = 'volume.svg'
  } else {
    music.play();
    musicImg.src = 'mute.svg'
  }
  isPlaying = !isPlaying;
});
