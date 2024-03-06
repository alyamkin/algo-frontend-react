export class FadeAnimation {
  constructor(node) {
    this.node = node;
  }

  start(duration) {
    this.duration = duration;
    if (duration === 0) {
      this.onProgress(1);
    } else {
      this.onProgress(0);
      this.startTime = performance.now();
      this.frameId = requestAnimationFrame(() => this.onFrame());
    }
  }
  stop() {
    cancelAnimationFrame(this.frameId);
    this.duration = 0;
    this.startTime = null;
    this.frameId = null;
  }
  onFrame() {
    const timePassed = performance.now() - this.startTime;
    let progress = Math.min(timePassed / this.duration, 1);
    console.log(progress);
    this.onProgress(progress);

    if (progress < 1) {
      this.frameId = requestAnimationFrame(() => this.onFrame());
    }
  }
  onProgress(progress) {
    this.node.style.opacity = progress;
  }
}
