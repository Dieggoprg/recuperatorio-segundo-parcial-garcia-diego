import express from "express";
import "dotenv/config";
import { initDB } from "./src/config/database.js";
import { router } from "./src/routes/language.routes.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/api", router);

initDB().then( ()=>{
    app.listen(PORT, ()=> {
        console.log("Server corriendo en el puerto: ",PORT)
    })
})

