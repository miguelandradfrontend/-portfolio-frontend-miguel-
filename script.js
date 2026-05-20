// ======================
// PORTFOLIO INTERACTIONS
// ======================

// ======================
// INTRO INTERACTIONS
// ======================

// Cambia el título principal al hacer clic
document.querySelector('h1').addEventListener('click', function() {
  this.textContent = '¡Hola desde JavaScript! 🚀';
});

// Contador de visitas usando localStorage
let visitas = localStorage.getItem('visitas') || 0;
visitas++;
localStorage.setItem('visitas', visitas);
document.querySelector('#contacto p').innerHTML += `<br>🧑‍💻 Visitas: ${visitas}`;

// ======================
// CYBER MODE
// ======================

let cyberMode = false;

document.querySelector('#cyber-btn').addEventListener('click', function() {
  document.body.classList.toggle('cyber-mode');
  cyberMode = !cyberMode;
  if (cyberMode) {
    this.textContent = '🌙 Normal Mode';
  } else {
    this.textContent = '✨ Cyber Mode';
  }
});

// ======================
// LEARNING STATUS
// ======================

const statusText = document.querySelector('#learning-status');

const learningStatuses = [
  'Currently learning: JavaScript DOM manipulation',
  'Currently learning: Responsive Design',
  'Currently learning: CSS animations',
  'Currently learning: Git & GitHub workflow',
  'Currently learning: Frontend UI/UX thinking'
];

let currentStatus = 0;
document.querySelector('#status-btn').addEventListener('click', function() {

  currentStatus++;
  if (currentStatus >= learningStatuses.length) {
    currentStatus = 0;
  }
  statusText.style.opacity = 0;
  statusText.style.transform = 'translateY(8px)';

setTimeout(function() {
  statusText.textContent = learningStatuses[currentStatus];
  statusText.style.opacity = 1;
  statusText.style.transform = 'translateY(0)';
}, 300);
  this.textContent = `Status ${currentStatus + 1} / ${learningStatuses.length}`;
});

// ======================
// PROJECT CARDS
// ======================

const cards = document.querySelectorAll('.card');

cards.forEach(function(card, index) {
  const randomRotation = Math.random() * 6 - 3;

  setTimeout(function() {
    card.style.opacity = 1;
    card.style.transform = `rotate(${randomRotation}deg) translateY(0)`;
  }, (index + 1) * 700);
    card.addEventListener('mouseenter', function() {
    card.style.transform = 'rotate(0deg) scale(1.10)';
  });
    card.addEventListener('mouseleave', function() {
    card.style.transform = `rotate(${randomRotation}deg) translateY(0)`;
  });
});

// ======================
// CYBER TERMINAL
// ======================

const terminalOutput = document.querySelector('#terminal-output');
const terminalBtn = document.querySelector('#terminal-btn');
const terminalBox = document.querySelector('.cyber-terminal');
const terminalMessages = [
  '> Initialising frontend scan...',
  '> HTML structure detected',
  '> CSS systems online',
  '> JavaScript interactions active',
  '> GitHub Pages deployment confirmed',
  '> Portfolio status: READY'
];

function createTerminalLine() {
  const line = document.createElement('div');
  terminalOutput.appendChild(line);
  return line;
}

function activateReadyGlow() {
  terminalBox.classList.remove('ready');

  setTimeout(function() {
    terminalBox.classList.add('ready');
  }, 10);
}
function typeWriter(line, message, onComplete) {
  let charIndex = 0;

  const typing = setInterval(function() {
    line.textContent += message[charIndex];
    charIndex++;

    if (charIndex >= message.length) {
      clearInterval(typing);
      onComplete();
    }
  }, 35);
}
terminalBtn.addEventListener('click', function() {
  this.disabled = true;
  this.textContent = 'Scanning...';

  terminalOutput.innerHTML = '';
  terminalBox.classList.remove('ready');

  let messageIndex = 0;
  function typeMessage() {
    if (messageIndex >= terminalMessages.length) {
        terminalBtn.disabled = false;
        terminalBtn.textContent = 'Run scan again';
      return;
    }

    const currentMessage = terminalMessages[messageIndex];
    const line = createTerminalLine();

typeWriter(line, currentMessage, function() {
  if (currentMessage.includes('READY')) {
    activateReadyGlow();
  }

  messageIndex++;
  setTimeout(typeMessage, 400);
});
  }
  typeMessage();
});


