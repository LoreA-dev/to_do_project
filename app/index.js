const express = require("express");
const cors = require('cors')
const bodyParser = require("body-parser");
const toDosModel = require('./mongoose/todos.model');
const connect = require('./mongoose');
const app = express();

app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})

app.use(bodyParser.json())

// app.get("/", (req,res) =>{
//     console.log(req.query)
//     const path_file = path.join(__dirname,"index.html")
//     res.sendFile(path_file)
// })

app.post("/toDo", async (req,res) =>{
    const { text } = req.body; 
    console.log(req.body)
    const todo = await toDosModel.create({ text: text });
    console.log(todo)
    return res.json({
        todo
    });
})

app.get("/toDo", async (req,res) =>{
    const result = await toDosModel.find();
    return res.json({
        result
    })
    //
})

//
app.patch("/todo/:id", async (req,res) =>{
    const { id } = req.params; 

})

app.listen(5000, async ()  =>{
    await connect.connect()
    console.log("Server in 5000")
});