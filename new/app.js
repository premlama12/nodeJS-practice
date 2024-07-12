const bcrypt = require("bcryptjs")
let  user={
    Name:"Prem",
    email:"lprem0418@gmail.com",
    password:"1234abcd"
}
console.log(user)
console.log("...............................................")
console.log("................................................")
let newPassword=bcrypt.hashSync(user.password,10)
console.log(newPassword)
let newUser={...user,password:newPassword}
console.log(newUser)

let flag=bcrypt.compareSync("1234abcd1",newUser.password)
console.log(flag)
if(bcrypt.compareSync('1234abcd1',newUser.password)){
    console.log("log in successful")
}
else{
    console.log("log in fail")
}