# gRPC in Nodejs : Todo App
Example project of using gRPC in Nodejs

## Install
1. Copy `env` to `.env`
2. Install NPM dependencies
    ```bash
    npm i
    ```

## Server
    bash
    npm run server
    

## Client
1. Init data (sent default data todos)
    ```bash
    node client/init-data
    ```
2. Sent data. Change `"your text is here"` to whatever text data you want to send
    ```bash
    node client/request "your text is here"
    ```
3. Read data todos
    ```bash
    node client/read
    ```
4. Streams data todos
    ```bash
    node client/stream
    ```
