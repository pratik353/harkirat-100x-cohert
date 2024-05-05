"use strict";
// Typescript Advanced Apis
// Pick API:- The Pick utility type in TypeScript is a powerful feature that allows you to construct new types by selecting a subset of properties from an existing type
const updateUser = (updatedProps) => {
    // hit the database to update user
};
// You can do it in both ways
const user = {
    name: "pratik",
    age: 21
};
// Map:- Map is used to create key value pair 
const users = new Map();
users.set("r@gmail.com", { name: "Ras", age: 24 });
users.set("ra@gmail.com", { name: "ra", age: 30 });
const getUser = users.get("r@gmail.com");
console.log(getUser);
