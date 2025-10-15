//Asynchronous

import fs from 'fs'
fs.readFile('abc.txt','utf-8',(err,data)=>{
    if(err) throw err

    fs.writeFile('pqr.txt',data,(err)=>{
        if(err) throw err
        console.log("New File Created");
        
    })
})