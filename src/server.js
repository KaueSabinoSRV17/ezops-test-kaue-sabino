const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

mongoose.set('strictQuery', true)
mongoose.connect(`mongodb+srv://kaue:${process.env.MONGO_PASSWORD}@cluster0.366fkjd.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => console.log('db connected'))
    .catch(console.log)

const messageSchema = mongoose.model(
    'Message',
    { name: String, message: String }
)

const app = express()
app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/messages', (request, response) => {
    messageSchema.find({}, (error, messages) => response.send(messages))
})

app.post('/messages', (request, response) => {
    const message = new messageSchema(request.body)
    message.save(error => {
        if (error) {
            response.sendStatus(500)
        }
        response.sendStatus(200)
    })
})

app.listen(3000, () => {
    console.log('server running')
})
