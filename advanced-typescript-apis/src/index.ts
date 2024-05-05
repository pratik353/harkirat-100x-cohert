// Typescript Advanced Apis
// Pick API:- The Pick utility type in TypeScript is a powerful feature that allows you to construct new types by selecting a subset of properties from an existing type

// General rule of functions --> function should not have more than 5-6 arguments 

interface User {
    name: string, 
    age: number,
    email: string,
    id: string,
    password: string
}

// If you want only some properties from object you can use Pick API

type UpdateProps = Pick<User, 'name' | 'age' | 'password'>

// Partial API:- Select Values partially means it can be optional

type UpdatePropsOptional = Partial<UpdateProps>

const updateUser = (updatedProps: UpdatePropsOptional) => {
    // hit the database to update user
}

// Readonly
type User2 = {
    readonly name: string,
    readonly age: number
}

// You can do it in both ways

const user: Readonly<User2> = {
    name: "pratik",
    age: 21
}

//user.name = 'Pratik2' // You can't do this because of readonly


// Record and Map

type UserAge = {
    [key: string]: string
}

// You can replace this with Record API

type User3 = Record<string, number> // same as UserAge API key

type TUser = {
    name: string,
    age: number
}
// Map:- Map is used to create key value pair. Map is javascript function
const users = new Map<string, TUser>();
users.set("r@gmail.com", { name: "Ras", age: 24});
users.set("ra@gmail.com", { name: "ra", age: 30});

const getUser = users.get("r@gmail.com");

users.delete("ra@gmail.com");

console.log(getUser);

// Exclude:- it excludes that type from Object properties
type EventType = 'click' | 'scroll' | 'mousemove';

type ExcludeEvent = Exclude<EventType,'click'>

const handleClick = ( event: ExcludeEvent) => {
    console.log(event)
}

handleClick('mousemove')