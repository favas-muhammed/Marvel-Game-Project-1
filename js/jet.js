class Jet {
  constructor(gameScreen, game) {
      this.gameScreen = gameScreen;
      this.game = game;
      this.element = document.getElementById('jet');
      
      // Set the desired width and height for the jet
      this.width = 60;  // Increased width
      this.height = 60; // Increased height
      
      this.left = this.gameScreen.clientWidth / 2 - this.width / 2; // Center the jet
      this.bottom = 0;

      this.render();

      window.addEventListener("keydown", (e) => {
          const left = parseInt(window.getComputedStyle(this.element).getPropertyValue("left"));

          if (e.key === "ArrowLeft" && left > 0) {
              this.left = left - 10;
              this.render();
          } else if (e.key === "ArrowRight" && left <= this.gameScreen.clientWidth - this.width) {
              this.left = left + 10;
              this.render();
          }

          if (e.key === "ArrowUp" || e.keyCode === 32) { 
              const bullet = new Bullet(this.gameScreen, this);
              this.game.bullets.push(bullet);
          }
      });
  }

  render() {
      this.element.style.left = `${this.left}px`;
      this.element.style.bottom = `${this.bottom}px`;
      this.element.style.width = `${this.width}px`;   // Set the width of the jet
      this.element.style.height = `${this.height}px`; // Set the height of the jet
  }
}