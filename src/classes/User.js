export class User {
  static from(json) {
    return Object.assign(new User(), json);
  }
}

export default User;
