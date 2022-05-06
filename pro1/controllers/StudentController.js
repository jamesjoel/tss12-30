const routes = require("express").Router();
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoUrl = "mongodb://localhost:27017";
const dbName = "tss5";
const collName = "student";


routes.get("/", (req, res)=>{

    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).find().toArray((err, result)=>{
            var obj = { result : result };
            res.render("student/index", obj);
        })
    })
})

routes.get("/edit/:a", (req, res)=>{
    var id = req.params.a;
    var objid = mongodb.ObjectId(id);
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).find({ _id : objid }).toArray((err, result)=>{
            var obj = { result : result[0] };
            res.render("student/edit", obj);
        })
    })
})

routes.post("/update/:a", (req, res)=>{
    var id = req.params.a;
    var objid = mongodb.ObjectId(id);

    req.body.age = parseInt(req.body.age);
    req.body.fee = parseInt(req.body.fee);
    req.body.class = parseInt(req.body.class);
    // console.log(req.body);
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).updateMany({_id : objid}, { $set : req.body }, (err)=>{
            res.redirect("/student");
        })
    })
})

module.exports = routes;