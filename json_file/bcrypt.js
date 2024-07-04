import bcrypt from "bcryptjs";
let userDetail={
    name:"prem",
    email:"lprem0418@gmail.com",
    password:"xyzabcd123",
};
let newPassword=bcrypt.hashSync(userDetail.password,10);
console.log(newPassword)
userDetail={...userDetail,password:newPassword};
console.log(userDetail)
let x=bcrypt.compareSync("xyzabcd1234",userDetail.password);
console.log(x)
if(bcrypt.compareSync("xyzabcd1234",userDetail.password)){
    console.log("password match");
}
else{
    console.log("password not matched")
}