const getAllTasks = (req, res) => {
    res.send('All tasks from the file')
}

const createTask = (req, res) => {
    res.send('create a New Task')
}

const getTask = (req, res) => {
    res.send('get a Single Task')
}

const updateTask = (req, res) => {
    res.send('update a Task')
}

const deleteTask = (req, res) => {
    res.send('delete a Task')
}



module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}