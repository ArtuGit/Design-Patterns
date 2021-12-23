export class UserData {
  constructor(uid) {
    this.uid = uid
    this.req = [];
    this.counter = null;
    this.connectionErrCounter = null;
  }
}

export class UsersData {
  constructor() {
    this.usersData = [];
  }

  initUser(uid) {
    this.usersData.push(new UserData(uid))
  }

  _findUserIndex(uid) {
    return this.usersData.findIndex((item) => item.uid === uid)
  }

  deleteUser(uid) {
    this.usersData.splice(this._findUserIndex(uid), 1);
  }

  addUserRequest(uid, request) {
    const userIndex = this._findUserIndex(uid)
    if (userIndex === -1) {
      throw Error(`User ${uid} does not exist`)
    } else {
      this.usersData[userIndex].req.push(request)
      // There we can calculate counter and connectionErrCounter
    }
  }

  getUserData(uid) {
    return this.usersData[this._findUserIndex(uid)]
  }
}

export const usersDataInstance = new UsersData()