const routes = require("express").Router();
const mysql = require("mysql");
const con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "tss5"
});




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