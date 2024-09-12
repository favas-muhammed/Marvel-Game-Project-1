class Rock {
    constructor(gameScreen) {
      this.gameScreen = gameScreen;
      this.element = document.createElement('div');
      this.element.classList.add('rocks');
      this.gameScreen.appendChild(this.element);
      
      this.left = Math.floor(Math.random() * (this.gameScreen.clientWidth - 50)); 
      this.top = 0; 
      
      this.render();
    }
  
    render() {
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
      this.top += 5;  
    }
  
    isOutOfBounds() {
      return this.top > this.gameScreen.clientHeight - 50; 
    }
  
    remove() {
      this.element.remove();
    }
  }