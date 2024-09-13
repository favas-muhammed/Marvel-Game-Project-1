window.onload = function() {
  const startButton = document.getElementById('start-button');
  const aboutButton = document.getElementById('about-button');
  const backButton = document.getElementById('back-button');
  const mainMenu = document.getElementById('main-menu');
  const aboutScreen = document.getElementById('about-screen');
  const gameContainer = document.getElementById('game-container');

  startButton.addEventListener('click', function() {
    mainMenu.classList.add('hidden');
    gameContainer.classList.remove('hidden');
    const game = new Game();
    game.start();
  });

  aboutButton.addEventListener('click', function() {
    mainMenu.classList.add('hidden');
    aboutScreen.classList.remove('hidden');
  });

  backButton.addEventListener('click', function() {
    aboutScreen.classList.add('hidden');
    mainMenu.classList.remove('hidden');
  });
};