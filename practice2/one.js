const fs=require("fs")
fs.readFile("emp.txt","utf-8",function(err,data){
    if(err) throw err
    console.log(data);
    fs.writeFile("data1.txt",data,(err)=>{
        if(err) throw err
        console.log("created succesfully")
    })
})