import {usersDataInstance} from './UsersData.js';
import {addUserData, deleteUser} from './some-module.js'

usersDataInstance.initUser('3');
usersDataInstance.addUserRequest('3', 'Req1')
usersDataInstance.addUserRequest('3', 'Req2')
console.log('-----', usersDataInstance.usersData)

addUserData('1')
console.log('-----', usersDataInstance.usersData)

deleteUser('3')
console.log('-----', usersDataInstance.usersData)
