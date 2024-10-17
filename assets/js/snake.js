class Snake {
  constructor(ctx) {
    this.ctx = ctx;

    this.w = 30;
    this.h = 30;

    this.x = 200;
    this.y = 200;

    this.parts = [
      { x: this.x * this.w, y: this.y },
      { x: this.x * this.w, y: this.y },
      { x: this.x * this.w, y: this.y },
      { x: this.x * this.w, y: this.y },
      { x: this.x * this.w, y: this.y },
    ];

    this.vx = 30;
    this.vy = 0;

    this.tick = 0;
  }

  draw() {
    this.ctx.fillRect(this.x, this.y, this.w, this.h);

    this.parts.forEach((p) => {
      this.ctx.fillRect(p.x, p.y, this.w, this.h);
    });
  }

  move() {
    if (this.tick++ > 10) {
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

  grow() {
    this.parts.push({
      x: this.parts[0].x,
      y: this.parts[0].y,
    });
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
