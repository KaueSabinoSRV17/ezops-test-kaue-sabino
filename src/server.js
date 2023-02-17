const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')

mongoose.set('strictQuery', true)
mongoose.connect(`mongodb+srv://kaue:${process.env.MONGO_PASSWORD}@cluster0.366fkjd.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => console.log('db connected'))
    .catch(console.log)

mongoose.model(
    'Message',
    { name: String, message: String }
)

const app = express()
app.use(express.static(__dirname))

app.listen(3000, () => {
    console.log('server running')
})
