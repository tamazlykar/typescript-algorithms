class QuickFind {
  private readonly ids: number[];

  constructor(n: number) {
    this.ids = new Array(n);
    for (let i = 0; i <= n; i++) {
      this.ids[i] = i;
    }
  }

  union(p: number, q: number): void {
    const pId = this.ids[p];
    const qId = this.ids[q];

    for (let i = 0; i <= this.ids.length; i++) {
      if (this.ids[i] === pId) {
        this.ids[i] = qId;
      }
    }
  }

  connected(p: number, q: number): boolean {
    return this.ids[p] === this.ids[q];
  }
}

export default QuickFind;
