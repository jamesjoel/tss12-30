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




routes.get("/more/:a", (req, res)=>{
    // console.log(req.params.a);
    var id = req.params.a; // 625ebaff1ed4755512095582
    var objid = mongodb.ObjectId(id);// ObjectId("625ebaff1ed4755512095582")
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss5");
        db.collection("student").find({ _id : objid }).toArray((err, result)=>{
            // console.log(result);
            var obj = { result : result[0] };
            res.render("signup/more", obj);
        })
    })
})


routes.get("/delete/:a", (req, res)=>{
    var id = req.params.a;
    var objid = mongodb.ObjectId(id);
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss5");
        db.collection("student").deleteMany({ _id : objid }, (err)=>{
            res.redirect("/signup/list");
        })
    })

})




routes.get("/demo/:x/:y/:z", (req, res)=>{
    console.log("-------------");
    console.log(req.params.x);
    console.log(req.params.y);
    console.log(req.params.z);
})

module.exports = routes;