// const fs = require("fs")
// fs.readFile('users.json','utf-8',(err,data)=>{
//     if(err)throw err;
//     let users=JSON.parse(data)
//     for(user of users){
//         console.log(user.name)
//     }
// })



// import fs from "fs"
// fs.readFile('users.json','utf-8',(err,data)=>{
//     if(err) throw err;
//     let users=JSON.parse(data)
//     for(let user of users){
//         console.log(user.name)
//     }
// })

import fs from "fs"
fs.readFile("users.json","utf-8",(err,data)=>{
    if(err) throw err;
    console.log(typeof data)
    let users=JSON.parse(data)
    console.log(typeof users)
    let maleuser=[]
    let femaleuser=[]
    for (let user of users){
        if(users.gender=="male"){
            maleuser.push(user)
        }
        else{
            femaleuser.push(user)
        }
    }
    fs.writeFile("male.json",JSON.stringify(maleuser),(err)=>{if(err)throw err});
    fs.writeFile("female.json",JSON.stringify(femaleuser),(err)=>{if(err)throw err});
})