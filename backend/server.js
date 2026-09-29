import express from "express"
import mysql from "mysql2"
import cors from "cors"

let data = express()
data.use(express.json());
data.use(cors())

let connection = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"purshottam9571",
    database:"axixa"
})

data.get("/college",function(req,res){
    connection.query("select * from books",function(error,result){
        res.json(result)
    })
})

data.post("/class",function(req,res){
    let username = req.body.name
    connection.query(`insert into books(name)values ('${username}')`,function(error,result){
        res.json(result)
    })
})

data.put("/axixa/:id",function(req,res){
    let username = req.body.name
    let userId = req.params.id
    connection.query(`update books set name = '${username}' where id = ${userId}`,function(error,result){
        res.json(result)
    })
})

data.delete("/books/:id",function(req,res){
    let userId = req.params.id
    connection.query(`delete from books where id ='${userId}'`,function(error,result){
        if(error){
            res.json(error)
        }
        res.json(result)
    })
})

data.listen(4009,function(){
    console.log("server started");
    
})