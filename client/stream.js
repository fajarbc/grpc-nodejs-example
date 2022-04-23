const client = require('./client').client

/* stream data */
const streamTodos = client.streamTodos()
console.log("[stream] START.")
streamTodos.on("data", todo => {
    console.log("[stream] item : " + JSON.stringify(todo));
})
streamTodos.on("end", _ => console.log("[stream] END."))