"use strict";
function sumOfages(user1, user2) {
    return user1.age + user2.age;
}
console.log(sumOfages({
    name: 'John',
    age: 25
}, {
    name: 'Jane',
    age: 30
}));
