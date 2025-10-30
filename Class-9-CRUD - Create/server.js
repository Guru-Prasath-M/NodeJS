import express from 'express'
import morgan from 'morgan'
import chalk from 'chalk'
import empRouter from './routes/empRoutes.js'

const app = express()

let port = 8080
let host ='127.0.0.1'

app.use(morgan('dev'))

app.get("/" , (req,resp) =>{
    return resp.status(200).json({"mesg":"Application Root Request"})
})

app.use("/emp",empRouter)

app.listen(port , host ,(err)=>{
    if(err) throw err
    console.log(chalk.red(`Server Running... http://${host}:${port}`));
    
})