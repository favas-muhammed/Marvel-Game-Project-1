class Game {
    constructor() {
      this.gameScreen = document.getElementById('board');
      this.jet = new Jet(this.gameScreen, this);
      this.bullets = [];
      this.rocks = [];
      this.framesPerSecond = 1000 / 60;
      this.currentFrame = 0;
      this.isGameOver = false;
      this.score = 0;
      this.brightened = [false, false, false, false, false, false];
    }
  
    start() {
      this.gameLoop();
    }
  
    gameLoop() {
      const intervalId = setInterval(() => {
        if (this.isGameOver) {
          clearInterval(intervalId);
          return;
        }
  
        this.currentFrame += 1;
  
        this.jet.render();
  
        this.bullets = this.bullets.filter(bullet => {
          bullet.render();
          if (bullet.isOutOfBounds()) {
            bullet.remove();
            return false;
          }
          return true;
        });
  
        if (this.currentFrame % 100 === 0) {
          const rock = new Rock(this.gameScreen);
          this.rocks.push(rock);
        }
  
        this.rocks = this.rocks.filter(rock => {
          rock.render();
  
          for (let i = 0; i < this.bullets.length; i++) {
            if (this.bullets[i].didCollide(rock)) {
              rock.remove();
              this.bullets[i].remove();
              this.bullets.splice(i, 1);
              this.updateScore();
              return false; 
            }
          }
  
         if (rock.isOutOfBounds()) {
            this.gameOver();
            return false;
          }
          return true;
        });
  
      }, this.framesPerSecond);
    }
  
    updateScore() {
      this.score += 1;
      document.getElementById('points').innerText = this.score;
      
      if (this.score % 10 === 0) {
        const imageIndex = Math.min(Math.floor(this.score / 10) - 1, 5);
        if (!this.brightened[imageIndex]) {
          this.brightenImage(imageIndex);
          this.brightened[imageIndex] = true;
        }
      }
    }
  
    brightenImage(index) {
      const images = document.querySelectorAll('.equal-image');
      if (images[index]) {
        images[index].classList.add('brightened');
      }
    }
  
    gameOver() {
      this.isGameOver = true;
      alert("Game Over!");
      window.location.reload();
    }
  }