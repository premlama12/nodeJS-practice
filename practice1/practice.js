const fs=require('fs')
let data=fs.readFileSync("emp.txt","utf-8")
fs.writeFileSync('data.txt',data)
console.log("the new file is creaated as data.txt and content of emp.txt is copied in it")