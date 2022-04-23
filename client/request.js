const client = require('./client').client

/* sent data */
const todo = {
    "id": -1,
    "text": process.argv[2], // take parameter from "node client/request.js isi_text"
}
console.log("[sent] item : " + JSON.stringify(todo));
client.createTodo(todo, (err, response) => {
    console.log("[receive] item : " + JSON.stringify(response));
})