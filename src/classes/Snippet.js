export class Snippet {
  static from(json) {
    return Object.assign(new Snippet(), json);
  }
}

export default Snippet;
