const routes = require("express").Router();

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const MongoUrl = "mongodb://localhost:27017";
var dbName = "tss5";
var collName = "teacher";


routes.get("/", (req, res)=>{
    MongoClient.connect(MongoUrl, (err, con)=>{
        var db = con.db(dbName);
        db.collection("city").find().toArray((err, result)=>{
            var obj = { result : result };
            res.render("teacher/index", obj);
        })
    })
})
routes.get("/list", (req, res)=>{
    MongoClient.connect(MongoUrl, (err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).find().toArray((err, result)=>{

            var obj = { result : result };
            res.render("teacher/list", obj);
        })
    })
})

routes.get("/view/:a", (req, res)=>{
    var id = req.params.a;
    var objid = mongodb.ObjectId(id);
    
    MongoClient.connect(MongoUrl, (err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).find({ _id : objid }).toArray((err, result)=>{
            // console.log(result);
            var obj = { result : result[0] };
            res.render("teacher/detail", obj);
        })
    })
})



routes.post("/save", (req, res)=>{
    // console.log(req.body);
    req.body.salary = parseInt(req.body.salary);

    MongoClient.connect(MongoUrl, (err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).insertOne(req.body, (err)=>{
            res.redirect("/teacher");
        });

    })

})

routes.get("/delete/:a", (req, res)=>{
    var id = req.params.a;
    var objid = mongodb.ObjectId(id);
    MongoClient.connect(MongoUrl, (err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).deleteMany({ _id : objid }, (err)=>{
            res.redirect("/teacher/list");
        })
    })
})

routes.get("/edit/:a", (req, res)=>{
    var id = req.params.a;
    var objid = mongodb.ObjectId(id);
    MongoClient.connect(MongoUrl, (err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).find({ _id : objid }).toArray((err, result1)=>{
            // console.log(result[0]);
            db.collection("city").find().toArray((err, result2)=>{
                var obj = { result1 : result1[0], result2 : result2 };
                res.render("teacher/edit", obj);

            })
            
        })
    })
})

routes.post("/update/:a", (req, res)=>{
    // console.log(req.body);
    var id = req.params.a;
    var objid = mongodb.ObjectId(id);

    req.body.salary = parseInt(req.body.salary);

    MongoClient.connect(MongoUrl, (err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).updateMany({ _id : objid }, {$set : req.body}, (err)=>{
            res.redirect("/teacher/list");
        })
    })
})




module.exports = routes;