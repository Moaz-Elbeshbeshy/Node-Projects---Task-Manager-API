const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')



// middleware
app.use(express.static('./public'))
app.use(express.json())


// routes
app.use('/api/v1/tasks', tasks)
app.use(notFound)


const port = 3000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        console.log('Connected to database ....')
        app.listen(port, console.log(`port is listening on port ${port}....`))
    } catch (err) {
        console.log(err)
    }
}

start()