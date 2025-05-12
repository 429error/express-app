const express = require("express")
require('dotenv').config();


const app = express()
const port = process.env.PORT || 9090

app.get('/', (request, response) => {
    response.send("defualt path");
})

app.get('/user', (req, res) => {

    let obj = {
        "user 1": "alex",
        "user 2": "sam"
    }
    res.json(obj).status(200);
})

app.post('/user', (req, res)=> {
    let name = req.query.name;
    let age = req.query.age;
    let method = req.query.req;

    console.log("mthod: ", method)

    if((method).toLowerCase() != 'post'){
        res.status(400).json({
            "error": "this methos is not allowed - pls do somethign else",
        });
    }

    res.status(200).json({
        "response": "succeded",
        "your data": {
            "name": `${name}`,
            "age": `${age}`
        }
    });
})

app.get('/user/:id', (req, res)=> {
    let id = req.params.id;

    if(id){
        console.log(typeof(id));

        const strId = parseInt(id);
        console.log(typeof(strId));

        res.status(200).send("ok");
    }

    res.status(200).send(`ok the id was recieved: ${id}`);
})

app.listen(port, () => {
    console.log("sever startde at port number ", port)
})