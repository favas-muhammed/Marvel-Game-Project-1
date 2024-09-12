class Jet {
    constructor(gameScreen, game) {
      this.gameScreen = gameScreen;
      this.game = game;
      this.element = document.getElementById('jet');
      this.left = this.gameScreen.clientWidth / 2 - 20;
      this.bottom = 0;
  
      this.render();
  
      window.addEventListener("keydown", (e) => {
        const left = parseInt(window.getComputedStyle(this.element).getPropertyValue("left"));
  
        if (e.key === "ArrowLeft" && left > 0) {
          this.left = left - 10;
          this.render();
        } else if (e.key === "ArrowRight" && left <= 460) {
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
    }
  }
  