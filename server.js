const Hapi = require("hapi");
const api = require("./api");

const DEFAULT_HOST = "localhost";
const DEFAULT_PORT = 3000;
const RADIX = 10;

//define Server
const server = Hapi.server({
    host: process.env.HOST || DEFAULT_HOST,
    port: parseInt(process.env.PORT, RADIX) || DEFAULT_PORT,
    app: {}
});

const myServer = async () => {
    try{

        await server.register(api);

        await server.start();

    }catch(err){
        console.log("hapi error starting server", err);
    }
};

myServer();