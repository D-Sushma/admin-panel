let express = require('express');
let bodyParser = require('body-parser');
let con = require('./connection');
let cors = require('cors')

const corsOptions = {
    Access_Control_Allow_Origin: "*",
};

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

con.connect((err) => {
    if (err) throw err;
    console.log('Mysql Connected with App...');
});
// -------------------------------------------------------
app.get('/', (req, res) => {
    res.send("Hello world");
})

/**  Get All Items */
app.get('/all', (req, res) => {
    let query = "SELECT * FROM students";
    con.query(query, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send((results));
    });
});

// /*** Get Single Item ** @return response() api/items/:id*/
app.get('/single/item/:id', (req, res) => {
    let query = "SELECT * FROM students WHERE sid=" + req.params.id;
    con.query(query, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send((results));
    });
});

// /*** Create New Item *post* @return response() */
app.get('/insert/items', (req, res) => {
    let query = "INSERT INTO students (sname, semail, smob, subject) VALUES ('aarti','arti123@gmail.com',8764787665,'DBMS')";
    con.query(query, (err, results) => {
        if (err) throw err;
        console.log(results)
        res.send('results' + results.insertId);
    });
});

// ** INSERT by POST method
app.post('/test', (req, res) => {
    let sname = req.body.sname;
    let semail = req.body.semail;
    let smob = req.body.smob;
    let subject = req.body.subject;
    let query = `INSERT INTO students (sname,semail,smob,subject) VALUES ('${sname}','${semail}','${smob}','${subject}')`;
    // let query = "INSERT INTO students (name, subject, contact) VALUES('" + sname + "',,'" + semail + "',,'" + smob + "','" + subject + "')";

    con.query(query, (err, results) => {
        if (err) throw err;
        // res.send(results);
        res.send('Student register success-full' + results.insertId);
        console.log('Student register success-full' + res);
    });
});

// /*---------------Server listening----------------------*/
app.listen(2000)
// app.listen(2000, () => {
//     console.log('Server started on port 2000...');
// });