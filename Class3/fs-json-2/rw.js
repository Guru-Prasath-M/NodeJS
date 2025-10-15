//SUNCHRONOUS

import fs from 'fs'
let emp_data = fs.readFileSync('employees.json','utf-8')
let employees = JSON.parse(emp_data)

let male_employees = []
for (let emp of employees){
    if(emp.gender === "Male"){
        male_employees.push(emp)
    }
}
console.log(male_employees.length);


fs.writeFileSync('male.json',JSON.stringify(male_employees))
console.log("New File Created");
