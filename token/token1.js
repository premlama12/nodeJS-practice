const jwt=require("jsonwebtoken")
let user={
    email:"lprem0418@gmail.com",
    password:"1234abcd"
}
let token=jwt.sign(user,"cccchhs1",(err,token)=>{
    if(err) throw err
    console.log(token)
})