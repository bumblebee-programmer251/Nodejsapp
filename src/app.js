import express from "express"

const app = express();

app.get("/testNode",(req,res)=>{
    res.status(200).send("yes the test node endpoint work")
});

export default app;