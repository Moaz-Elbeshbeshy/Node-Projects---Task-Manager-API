const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

const port = 3000

// middleware
app.use(express.json())


// routes
app.get('/hello', (req, res) => {
    console.log('Hello')
    res.send('Hello')
})

app.use('/api/v1/tasks', tasks)






app.listen(port, console.log(`port is listening on port ${port}....`))