//Synchronous

import fs from 'fs'

let data = fs.readFileSync('abc.txt','utf-8')
fs.writeFileSync('xyz.txt',data)

console.log("New File Created")