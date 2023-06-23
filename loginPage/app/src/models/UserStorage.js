"use strict";

class UserStorage {
    // users info. (private)
    static #users = {
        id: ['user01', 'user02', 'user03'], 
        password: ['1234', '1234', '1234'],
        name: ['user-01', 'user-02', 'user-03'],
    };

    // METHOD: 은닉화된 정보 공유
    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
        }, {});
        console.log(newUsers)
        return newUsers; 
    }

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);  // [id, password, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx]; 
            return newUser;
        }, {});

        return userInfo;
    }
}

module.exports = UserStorage;