/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function(resolve){
        setTimeout(()=>{
            // console.log("Promise resolved");
            resolve();
        },n*1000)
    })
}
// async function main(){
//     let value = await wait(3);
//     console.log(value);
// }
// main();

module.exports = wait;
