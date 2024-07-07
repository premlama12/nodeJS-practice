var express=require("express")
var app=express()
app.get("/",(req,res)=>{
    // console.log(req)
    // console.log(res)
    res.send("root request")
})

app.get("/user",(req,res)=>{
    res.send(`<h1>user Data</h1>`)
})

app.get("/detaile",(req,res)=>{
    res.send("Employee Data")
})

app.get("/detail/emp",(req,res)=>{
    res.send("send user data")
})

app.post("/signIn",(req,res)=>{
    res.send(`<h1>Request succesfully</h1>`)
})

app.listen(5000,(err)=>{
    if(err) throw err
    console.log("server Started at port 5000")
})