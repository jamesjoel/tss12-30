const routes = require("express").Router();
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;



routes.get("/", (req, res)=>{
    res.render("signup/index");
})

routes.post("/save", (req, res)=>{
    

    req.body.age = parseInt(req.body.age);
    req.body.fee = parseInt(req.body.fee);
    req.body.class = parseInt(req.body.class);

    var data = req.body;

    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        if(err){
            console.log(err);
            return;
        }

        var db = con.db("tss5");
        db.collection("student").insertOne(data, (err)=>{
            if(err){
                console.log(err);
                return;
            }
            res.redirect("/signup/list");
        });

    });






})
// :3000/signup/list
routes.get("/list", (req, res)=>{

    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss5");
        db.collection("student").find({}).toArray((err,  result)=>{
            // console.log(result);
            var obj = { result : result };
            res.render("signup/list", obj);
        })
    })


    
})

module.exports = routes;