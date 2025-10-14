//Write Javascript code to read employees.json file
//and print all employees name\

import fs from 'fs';
let emp_data=fs.readFileSync('employees.json','utf-8');
console.log(typeof emp_data);

let employees = JSON.parse(emp_data);
//console.log(employees);
for(let emp of employees){
    console.log(emp.name);
}