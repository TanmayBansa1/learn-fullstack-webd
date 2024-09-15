// const x: number = 1;
// console.log(x)


// function render(firstname: string){

//     console.log(`hello ${firstname}`)
// }

// let firstname: string = "Tanmay";
// render(firstname)

// function sum(a: number, b: number):number{
//     return a+b;
// }

// function verify(age: number): string{
//     if(age>=18) return "ues"
//     return "no"
// }

// interface User{
//     age: number,
//     firstname: string,
//     lastname: string,
//     email?: string
// }
// type User2 = {
//     age: number,
//     firstname: string,
//     lastname: string,
//     email?: string
// }
// //type can't implement classes but interface can
// //types allow OR and ANS i.e union and intersection
// //define our  own types custom using LR

// type stringOrnumber = string | number
// //arrays in typecript
// type numArray = number[]
// function isverify(user: User): string{
//     if(user.age>=18) return "ues"
//     return "no"
// }
// console.log(sum(7,8))
// console.log(verify(7))
// console.log(isverify({
//     age: 21,
//     firstname: "hark",
//     lastname: "lol"
// }))



// type keyInput = "up" | "down" | "left" | "right"

// function doSomethings(value: keyInput){

//     // something something like
//     if(value == "up"){

//     }
// }

// doSomethings("right");

// //enums
// // 0,1,2,3.. are default values
// enum Direction{
//     Up, //0
//     Down, //1
//     Left, //2
//     Right //3
// }
// //can give separate values but have to give to all of them

// function doSomething2(keyInput: Direction){
//     if(keyInput == Direction.Up){

//     }
// }

// doSomething2(Direction.Up)

//templates
function solve<T>(arg: T[]): T{

    return arg[0];
}
// T can be objects or interfaces
console.log(solve(["tanmay","bansal"]).toUpperCase())
