import express from 'express'
import fs from 'fs';
import path from 'path'
let router = express.Router()
/* 
Read 
------
Usage: fetch all employees 
Rest API URL: http://127.0.0.1:8080/emp/read
Method Type:GET
required Fields:None
Access Type:Public */

router.get("/read",async (req,resp)=>{
    console.log("Inside Read Request...")
    let employees=await getEmployees()
    return resp.status(200).json(employees)
})

let getEmployees=()=>{
    let emp_file=path.join(process.cwd(),"data","employees.json")
    console.log(emp_file)
    let emp_Data=fs.readFileSync(emp_file,'utf-8')
    return JSON.parse(emp_Data)
}

export default router;