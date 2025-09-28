// Elements
const step1 = document.getElementById("opening-1");
const step2 = document.getElementById("opening-2");
const hero = document.getElementById("hero");
const audio = document.getElementById("bgAudio");
const musicBtn = document.getElementById("musicBtn");

// Step control
document.getElementById("btn-step1").addEventListener("click", () => {
  step1.classList.add("hidden");
  step2.classList.remove("hidden");
});
document.getElementById("btn-step2").addEventListener("click", () => {
  step2.classList.add("hidden");
  hero.classList.remove("hidden");
  startTyping();
  playMusic();
  setTimeout(() => {
    document.getElementById("hidden-note").classList.add("show");
  }, 5000);
});

// Typing effect
function startTyping() {
  const text = "Happy 20th Birthday, Alya!";
  let i = 0;
  const target = document.getElementById("typed-title");
  const interval = setInterval(() => {
    target.textContent += text[i];
    i++;
    if (i === text.length) {
      clearInterval(interval);
      target.classList.add("glow");
    }
  }, 100);
}

// Sakura
function createPetal() {
  const container = document.querySelector(".sakura-container");
  const petal = document.createElement("div");
  petal.classList.add("sakura");
  const size = Math.random() * 12 + 8;
  petal.style.width = `${size}px`;
  petal.style.height = `${size}px`;
  petal.style.left = Math.random() * window.innerWidth + "px";
  petal.style.background = ["#ffb6c1","#ffc0cb","#fffafa"][Math.floor(Math.random()*3)];
  petal.style.animationDuration = (6 + Math.random() * 4) + "s";
  container.appendChild(petal);
  setTimeout(() => petal.remove(), 10000);
}
setInterval(createPetal, 250);

// Music
function playMusic() {
  audio.play().catch(() => {});
}
musicBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    musicBtn.textContent = "Pause Music ⏸️";
  } else {
    audio.pause();
    musicBtn.textContent = "Play Music ▶️";
  }
});

// Modal animations
function modalAnimate(modalId, cardSelector) {
  const modal = document.getElementById(modalId);
  modal.addEventListener("shown.bs.modal", () => {
    const cards = modal.querySelectorAll(cardSelector);
    cards.forEach((card, i) => {
      setTimeout(() => card.classList.add("show-animate"), i * 200);
    });
  });
  modal.addEventListener("hidden.bs.modal", () => {
    modal.querySelectorAll(cardSelector).forEach(c => c.classList.remove("show-animate"));
  });
}
modalAnimate("factsModal", ".fact-card");
modalAnimate("giftsModal", ".gift-card");
 