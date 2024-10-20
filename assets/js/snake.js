class Snake {
  constructor(ctx) {
    this.ctx = ctx;

    this.w = 30;
    this.h = 30;

    this.x = 120;
    this.y = 120;

    this.parts = [
      { x: this.x * this.w, y: this.y, w: this.w, h: this.h },
      { x: this.x * this.w, y: this.y, w: this.w, h: this.h },
      { x: this.x * this.w, y: this.y, w: this.w, h: this.h },
      { x: this.x * this.w, y: this.y, w: this.w, h: this.h },
      { x: this.x * this.w, y: this.y, w: this.w, h: this.h },
    ];

    this.vx = 30;
    this.vy = 0;

    this.tick = 0;

    this.drawCount = 10;
  }

  draw() {
    this.ctx.fillRect(this.x, this.y, this.w, this.h);

    this.parts.forEach((p) => {
      this.ctx.fillRect(p.x, p.y, this.w, this.h);
    });
  }

  gameOver() {
    console.error("game over");
  }

  checkCollisions() {
    if (
      this.x + this.w > this.ctx.canvas.width ||
      this.x < 0 ||
      this.y < 0 ||
      this.y + this.h > this.ctx.canvas.height
    ) {
      this.gameOver();
    }

    this.parts.forEach((part) => {
      if (this.collides(part)) {
        this.gameOver();
      }
    });
  }

  move() {
    if (this.tick++ > this.drawCount) {
      this.tick = 0;

      this.x += this.vx;
      this.y += this.vy;

      for (let i = 0; i < this.parts.length; i++) {
        const part = this.parts[i];
        const next = this.parts[i + 1] || this;

        part.x = next.x;
        part.y = next.y;
      }
    }
  }

  collides(el) {
    const colX = el.x < this.x + this.w && el.x + el.w > this.x;
    const colY = el.y < this.y + this.h && el.y + el.h > this.y;

    return colX && colY;
  }

  grow() {
    this.parts.unshift({
      x: this.parts[0].x,
      y: this.parts[0].y,
      w: this.w,
      h: this.h,
    });

    if (this.drawCount > 0) {
      this.drawCount--;
    }
  }

  onKeyDown(code) {
    switch (code) {
      case KEY_UP: {
        if (this.vy === 0) {
          this.vy = -30;
          this.vx = 0;
        }
        break;
      }
      case KEY_DOWN: {
        if (this.vy === 0) {
          this.vy = 30;
          this.vx = 0;
        }
        break;
      }

      case KEY_RIGHT: {
        if (this.vx === 0) {
          this.vx = 30;
          this.vy = 0;
        }
        break;
      }

      case KEY_LEFT: {
        if (this.vx === 0) {
          this.vx = -30;
          this.vy = 0;
        }
        break;
      }
    }
  }
}
