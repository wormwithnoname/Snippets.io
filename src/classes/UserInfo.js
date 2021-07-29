export class UserInfo {
  static from(json) {
    return Object.assign(new UserInfo(), json);
  }
  //   set(field, value) {
  //     this.field = value;
  //   }
}

export default UserInfo;
