const client = require('./client').client

/* read data */
client.readTodos({}, (err, response) => {
    console.log("[read] START.");
    response.items?.map(item => console.log(item))
    console.log("[read] END.");
})