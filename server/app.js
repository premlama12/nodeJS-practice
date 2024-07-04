const http=require("http");
let server=http.createServer((req,res)=>{
    res.end(`<h1>Hello world....</h1>`);
});
server.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log("Server started")
});
