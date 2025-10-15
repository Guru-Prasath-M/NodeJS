//Asynchronous

import { error } from 'console'
import fs from 'fs'

fs.readFile("abc.txt",'utf-8',(err,data)=>{
    if(err) throw error
    console.log(data);
    
})
