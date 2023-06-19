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
app.get('/users', (req, res) => {
    let query = "SELECT * FROM user";
    con.query(query, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send((results));
    });
});

// /*** Get Single Item ** @return response() api/items/:id*/
app.get('/single/item/:id', (req, res) => {
    let query = "SELECT * FROM user WHERE uid=" + req.params.id;
    con.query(query, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send((results));
    });
});

// /*** Create New Item *post* @return response() */
app.get('/insert', (req, res) => {
    let query = "INSERT INTO user (uname, uemail, umob, uaddress) VALUES ('aarti','arti123@gmail.com',8764787665,'DBMS')";
    con.query(query, (err, results) => {
        if (err) throw err;
        console.log(results)
        res.send('results' + results.insertId);
    });
});

// ** INSERT by POST method
app.post('/insert/items', (req, res) => {
    let uname = req.body.uname;
    let uemail = req.body.uemail;
    let umob = req.body.umob;
    let uaddress = req.body.uaddress;
    let query = `INSERT INTO user (uname,uemail,umob,uaddress) VALUES ('${uname}','${uemail}','${umob}','${uaddress}')`;
    // let query = "INSERT INTO user (name, uaddress, contact) VALUES('" + uname + "',,'" + uemail + "',,'" + umob + "','" + uaddress + "')";

    con.query(query, (err, results) => {
        if (err) throw err;
        // res.send(results);
        res.send('Student register success-full' + results.insertId);
        console.log('Student register success-full' + res);
    });
});
// ** UPDATE by POST method
app.post('/update/items', (req, res) => {
    let uid = req.body.uid;
    let uname = req.body.uname;
    let uemail = req.body.uemail;
    let umob = req.body.umob;
    let uaddress = req.body.uaddress;
    let query = `UPDATE user SET uname='${uname}',uemail='${uemail}',umob='${umob}',uaddress='${uaddress}' WHERE uid='${uid}'`;

    con.query(query, (err, results) => {
        if (err) throw err;
        // res.send(results);
        res.send('Student register success-full' + results.insertId);
        console.log('Student register success-full' + res);
    });
});
// ** DELETE by POST method
app.post('/delete/items', (req, res) => {
    let uid = req.body.uid;
    let query = `DELETE FROM user WHERE uid='${uid}'`;
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