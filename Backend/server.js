const express = require("express");

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("halleluyah")
})
app.listen(5000, console.log(`server connected to port 5000`))