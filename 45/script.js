'use strict';

function User(name, id) {
    this.names = name;
    this.ids = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.names}`);
    };
}

User.prototype.exit = function() {
    console.log(`Пользователь ${this.names} ушел`);
};

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.exit();

ivan.hello();

console.log(ivan);
console.log(alex);