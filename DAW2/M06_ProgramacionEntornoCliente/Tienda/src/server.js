import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'



const app = express()

app.use('/', express.static('src/html'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

app.post('/user/register', (req, res) => {
  console.log("Register POST")
  console.log(req.body)
})

app.post('/user/login', (req, res) => {
  console.log("Login POST")
  console.log(req.body)
})

app.listen('9000', () => {
  console.log('Server listening in http://localhost:9000')
})
