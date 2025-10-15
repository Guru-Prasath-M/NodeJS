import fs from 'fs'

//fs.readFile('file_name' , 'encoding format' , Callback -> ()=>{})
fs.readFile('employees.json','utf-8',(err,data)=>{
    if(err) throw err
    let employees = JSON.parse(data)
    let female_employees = employees.filter((emp)=>{
        return emp.gender === 'Female'
    })
      console.log(female_employees.lenght)

    fs.writeFile('female.json', JSON.stringify(female_employees), (err)=>{
        if(err) throw err
        console.log("New File Created");
    }) 
})