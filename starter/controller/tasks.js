const getAllTasks = (req, res) => {
    res.send('All tasks from the file')
}

const createTask = (req, res) => {
    res.json(req.body)
}

const getTask = (req, res) => {
    res.json({ id: req.params.id })
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