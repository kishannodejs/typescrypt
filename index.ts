import {Server} from "./server"

const server = new Server().app;

server.listen(5000, ()=>{
    console.log('server is running');
})