import express from 'express'
import morgan from 'morgan'
import chalk from 'chalk'
import empRouter from './routes/empRoutes.js'

const app = express()

let port = 5000
let host = '127.0.0.1'

// Middleware
app.use(morgan('dev'))
app.use(express.json()) // ✅ REQUIRED to parse JSON body

// Root route
app.get("/", (req, resp) => {
  return resp.status(200).json({ "msg": "Application Root Request" })
})

// Employee Routes
app.use("/emp", empRouter)

// Start server
app.listen(port, host, (err) => {
  if (err) throw err
  console.log(chalk.red(`🚀 Server Running... http://${host}:${port}`))
})
