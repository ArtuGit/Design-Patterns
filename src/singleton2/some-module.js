import {usersDataInstance} from "./UsersData.js";

export const addUserData = (uid) => {
  usersDataInstance.initUser(uid);
  usersDataInstance.addUserRequest(uid, 'Req1')
  usersDataInstance.addUserRequest(uid, 'Req2')
  usersDataInstance.addUserRequest(uid, 'Req3')
}

export const deleteUser = (uid) => {
  usersDataInstance.deleteUser(uid)
}