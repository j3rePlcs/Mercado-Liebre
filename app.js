const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

// llamando_servidor
app.listen(3030, () => {
        console.log("Servidor corriendo(PUERTO 3030)");
    })
    // Rutas
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/index.html"));
})
app.get("/register",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/register.html"))
})
app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/login.html"))
})