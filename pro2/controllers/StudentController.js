const routes = require("express").Router();
const mysql = require("mysql");
const con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "tss5"
});


routes.post("/add", (req, res)=>{

    // console.log("INSERT INTO student (name, age, city, gender, address, fee) VALUES ('"+req.body.name+"', '"+req.body.age+"', '"+req.body.city+"', '"+req.body.gender+"', '"+req.body.address+"', '"+req.body.fee+"')");
    // return;


    con.connect((err)=>{
        con.query("INSERT INTO student (name, age, city, gender, address, fee) VALUES ('"+req.body.name+"', '"+req.body.age+"', '"+req.body.city+"', '"+req.body.gender+"', '"+req.body.address+"', '"+req.body.fee+"')", (err)=>{
            res.redirect("/student");
        })
    })
})

routes.get("/delete/:a", (req, res)=>{
    var id = req.params.a;
    con.connect((err)=>{
        con.query("DELETE FROM student WHERE id = "+id, (err)=>{
            res.redirect("/student")
        })
    })
})


routes.get("/", (req, res)=>{
    con.connect((err)=>{
        con.query("SELECT * FROM student", (err, result)=>{
            // console.log(result);
            var data = JSON.parse(JSON.stringify(result));
            // console.log(data);
            var obj = { data : data };
            res.render("student/index", obj);
        });
    });
})

module.exports = routes;

/*
    SELECT * FROM tablename             ---- find()

    INSERT INTO tablename (col1, col2, col3...) VALUES ('val1', 'val2', 'val3')     ----- insertOne()

    DELETE FROM tablename              ------ removeMany();

    UPDATE tablename SET col1 ='val1', col2 = 'val2' ....       ----- updateMany()





*/