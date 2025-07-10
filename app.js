import express from "express";
import "dotenv/config";
import { initDB } from "./src/config/database.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

initDB().then( ()=>{
    app.listen(PORT, ()=> {
        console.log("Server corriendo en el puerto: ",PORT)
    })
})

