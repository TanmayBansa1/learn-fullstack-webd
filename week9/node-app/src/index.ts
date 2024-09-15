interface User{
    name: string,
    age: number,
    id: number,
    email: string,
    password: string
}
type sumProps = Pick<User, 'age' >
//or
type sumProps2 = Exclude<User, 'name' | 'id' | 'email' | 'password'>

function sumOfages(user1: sumProps, user2: sumProps){
    
    return user1.age+user2.age;
}

console.log(sumOfages({
    // name: 'John',
    age: 25
},{
    // name: 'Jane',
    age: 30
}))
type updateProps = Pick<User, 'name' | 'age' | 'email'>
type updateOptional  = Partial<updateProps>
// type updateProps = Pick<User, 'name' | 'age' | 'email'>
function updateUser(props: updateOptional){

    //dinf this user then update his info
}

type dontEdit = {
    readonly age: number,
    name: string
}

//or
const donEdit: Readonly<User> = {
    name: 'ta',
    age: 25,
    id: 23,
    email: 'tjlsk',
    password: '123'
}