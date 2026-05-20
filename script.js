// 1. CAMBIAR NOMBRE al hacer clic
  document.querySelector('h1').addEventListener('click', function() {
    this.textContent = '¡Hola desde JavaScript! 🚀';
  });

  // 2. DOBLE CLICK FONDO CYBER
//document.body.ondblclick = function() {
  //document.body.style.backgroundImage = "url('fondo-cyber.png')";
  //document.body.style.backgroundSize = "cover";
  //document.body.style.backgroundPosition = "center";
  //document.body.style.backgroundRepeat = "no-repeat";
//};

  // 3. CONTADOR VISITAS (localStorage)
  let visitas = localStorage.getItem('visitas') || 0;
  visitas++;
  localStorage.setItem('visitas', visitas);
  document.querySelector('#contacto p').innerHTML += `<br>🧑‍💻 Visitas: ${visitas}`;

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

const terminalOutput = document.querySelector('#terminal-output');

const terminalMessages = [
  '> Initialising frontend scan...',
  '> HTML structure detected',
  '> CSS systems online',
  '> JavaScript interactions active',
  '> GitHub Pages deployment confirmed',
  '> Portfolio status: READY'
];

document.querySelector('#terminal-btn').addEventListener('click', function() {

  this.disabled = true;
  this.textContent = 'Scanning...';

  terminalOutput.innerHTML = '';
  const terminalBox = document.querySelector('.cyber-terminal');
  terminalBox.classList.remove('ready');

  let messageIndex = 0;

  function typeMessage() {
    if (messageIndex >= terminalMessages.length) {
      document.querySelector('#terminal-btn').disabled = false;
      document.querySelector('#terminal-btn').textContent = 'Run scan again';
      return;
    }

    let currentMessage = terminalMessages[messageIndex];
    let charIndex = 0;
    let line = document.createElement('div');

    terminalOutput.appendChild(line);

    let typing = setInterval(function() {
      line.textContent += currentMessage[charIndex];
      charIndex++;

      if (charIndex >= currentMessage.length) {
        clearInterval(typing);
        if (currentMessage.includes('READY')) {
  terminalBox.classList.remove('ready');

  setTimeout(function() {
    terminalBox.classList.add('ready');
  }, 10);
}
        messageIndex++;

        setTimeout(typeMessage, 400);
      }
    }, 35);
  }

  typeMessage();

});
