class Game {
  constructor(ctx) {
    this.ctx = ctx;

    this.snake = new Snake(ctx);
    this.powerUp = new PowerUp(ctx);
    this.interval = null;
  }

  start() {
    this.interval = setInterval(() => {
      this.clear();
      this.draw();
      this.checkCollisions();
      this.move();
    }, 1000 / 60);
  }

  checkCollisions() {
    this.snake.checkCollisions();

    if (this.snake.collides(this.powerUp)) {
      this.snake.grow();
      this.powerUp = new PowerUp(this.ctx);
    }
  }

  pause() {
    clearInterval(this.interval);
  }

  draw() {
    this.snake.draw();
    this.powerUp.draw();
  }

  move() {
    this.snake.move();
    this.powerUp.move();
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  onKeyDown(code) {
    this.snake.onKeyDown(code);
  }
}
