class Bullet {
  constructor(gameScreen, jet) {
      this.gameScreen = gameScreen;
      this.element = document.createElement('div');
      this.element.classList.add('bullets');
      this.gameScreen.appendChild(this.element);
      
      this.left = jet.left + 15; 
      this.bottom = 40; 
      
      this.width = 10;  
      this.height = 20; 
      
      this.render();
  }

  render() {
      this.element.style.left = `${this.left}px`;
      this.element.style.bottom = `${this.bottom}px`;
      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
      this.element.style.backgroundImage = "url('./images/bullet.png')";
      this.element.style.backgroundSize = 'contain';
      this.element.style.backgroundRepeat = 'no-repeat';
      
      this.bottom += 5;  
  }

  isOutOfBounds() {
      return this.bottom > this.gameScreen.clientHeight; 
  }

  didCollide(rock) {
      const bulletRect = this.element.getBoundingClientRect();
      const rockRect = rock.element.getBoundingClientRect();
      
      return (
          bulletRect.left < rockRect.right &&
          bulletRect.right > rockRect.left &&
          bulletRect.top < rockRect.bottom &&
          bulletRect.bottom > rockRect.top
      );
  }

  remove() {
      this.element.remove();
  }
}