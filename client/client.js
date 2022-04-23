require('dotenv').config()
const grpc = require("grpc")
const protoLoader = require("@grpc/proto-loader")
const packageDefinition = protoLoader.loadSync(process.env.PROTO_FILE, {})
const grpcObject = grpc.loadPackageDefinition(packageDefinition)
const todoPackage = grpcObject.todoPackage;

const grpcServerCredential = grpc.credentials.createInsecure() // for local development

const client = new todoPackage.Todo(process.env.HOST, grpcServerCredential)
module.exports = {
    client
}