const express = require("express");
const app= express();
const routes= require("./ROUTES/routes")
app.use(express.json());

app.use('/', routes);
port =3000
app.listen(3000,()=>{
    console.log(`server running at ${port}`);
})

