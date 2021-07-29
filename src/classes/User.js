export class User {
  static from(json) {
    return Object.assign(new User(), json);
  }
  //   set(field, value) {
  //     this.field = value;
  //   }
}

export default User;
