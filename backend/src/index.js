const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0.mynib.mongodb.net/omni05?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use((req, res, next) => {
    req.io = io

    return next()
})

app.use(cors())
app.use(express.json())
app.use(require('./routes'))

server.listen(3333, () => {
    console.log('\n\nServer started on port 3333 :D\n\n')
})

