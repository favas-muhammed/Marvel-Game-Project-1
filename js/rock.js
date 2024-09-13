class Rock {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.element = document.createElement('div');
    this.element.classList.add('rocks');
    this.gameScreen.appendChild(this.element);
    
    this.left = Math.floor(Math.random() * (this.gameScreen.clientWidth - 50)); 
    this.top = 0; 
    
    this.width = 50;  // Set a width for the alien
    this.height = 50; // Set a height for the alien
    
    this.render();
  }

  render() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.backgroundImage = "url('./images/alien.png')";
    this.element.style.backgroundSize = 'contain';
    this.element.style.backgroundRepeat = 'no-repeat';
    this.top += 2;  // Reduced speed for better gameplay
  }

  isOutOfBounds() {
    return this.top > this.gameScreen.clientHeight - this.height; 
  }

  remove() {
    this.element.remove();
  }
}