const jwt=require("jsonwebtoken")
let user={
    email:"lprem0418@gmail.com",
    password:"1234abcd"
}
let payload={
    id:user.email,
}
let secretkey="DEAFEGIC";
let token=jwt.sign(payload,secretkey,{expiresIn:60*60});
console.log(token)
//verify the email

jwt.verify(token,secretkey,(err,newPayload)=>{
    if(err) throw err;
    console.log(newPayload)
})