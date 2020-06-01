require('../src/db/mongoose')
const Task = require('../src/models/task')

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5c1a634150c97706427d4661').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
