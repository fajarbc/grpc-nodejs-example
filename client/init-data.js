const client = require('./client').client

const todos = [
    "#1 Task",
    "#2 Task",
    "#3 Task",
    "#4 Task",
    "#5 Task",
]

/* sent data */
todos.map(item => {
    const todo = {
        "id": -1,
        "text": item,
    }
    console.log("[sent] item : " + JSON.stringify(todo));
    client.createTodo(todo, (err, response) => {
        // console.log("[receive] item : " + JSON.stringify(response));
    })
})
