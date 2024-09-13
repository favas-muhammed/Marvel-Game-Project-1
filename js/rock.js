class Rock {
  constructor(gameScreen, speed) {
    this.gameScreen = gameScreen;
    this.element = document.createElement('div');
    this.element.classList.add('rocks'); // CSS will handle the styles
    this.gameScreen.appendChild(this.element);

    this.left = Math.floor(Math.random() * (this.gameScreen.clientWidth - 50)); 
    this.top = 0; 

    this.speed = speed;

    this.render();
  }

  render() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    this.top += this.speed;  
  }

  isOutOfBounds() {
    return this.top > this.gameScreen.clientHeight - this.element.clientHeight;
  }

  remove() {
    this.element.remove();
  }
}
