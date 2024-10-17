class PowerUp {
  constructor(ctx) {
    this.ctx = ctx;

    this.w = 30;
    this.h = 30;

    this.x = Math.floor(Math.random() * this.ctx.canvas.width);
    this.y = Math.floor(Math.random() * this.ctx.canvas.height);
  }

  draw() {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
    this.ctx.fillStyle = "black";
  }

  move() {}
}
