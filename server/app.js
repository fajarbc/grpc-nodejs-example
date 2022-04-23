require('dotenv').config()
const grpc = require("grpc")
const protoLoader = require("@grpc/proto-loader")
const packageDefinition = protoLoader.loadSync(process.env.PROTO_FILE, {})
const grpcObject = grpc.loadPackageDefinition(packageDefinition)
const todoPackage = grpcObject.todoPackage;

const grpcServerCredential = grpc.ServerCredentials.createInsecure() // for local development

const server = new grpc.Server()
server.bind(process.env.HOST, grpcServerCredential)
server.addService(todoPackage.Todo.service, {
    "createTodo": createTodo, // map service Todo.createTodo to this createTodo() function
    "readTodos": readTodos,
    "streamTodos": streamTodos,
})
server.start()
console.log(`server started at http://${process.env.HOST}`);

// function always receive (call, callback)
// call : contains the request
// callback : for response
const todos = []
function createTodo(call, callback) {
    console.log("[server] receive : "+ JSON.stringify(call.request));
    const todoItem = {
        "id": todos.length + 1,
        "text": call.request.text,
    }
    todos.push(todoItem)
    callback(null, todoItem) // response to client
}

function readTodos(call, callback) {
    callback(null, {"items": todos})
}

function streamTodos(call, callback) {
    todos.forEach(todo => {
        call.write(todo)
    });
    call.end()
}