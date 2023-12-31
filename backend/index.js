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
// ------------------------USER-------------------------------
app.get('/', (req, res) => {
    res.send({ code: 200, msg: "Hello world" });
})

/**  Get All Items */
app.get('/users', (req, res) => {
    try {
        let query = "SELECT * FROM user";
        con.query(query, (err, results) => {
            if (err) throw err;
            console.log(results);
            res.send({ code: 200, results: results });
        });
    } catch (error) {
        console.log('error', error);
    }
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
// ** VIEW single user data
app.post('/view/items', (req, res) => {
    try {
        let uid = req.body.uid;
        let query = `SELECT * FROM user WHERE uid='${uid}'`;
        con.query(query, (err, results) => {
            if (err) throw err;
            res.send({ code: 200, results: results });
            console.log(results);
        });
    } catch (error) {
        console.log('error', error);
    }
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
    try {
        let uname = req.body.uname;
        let uemail = req.body.uemail;
        let umob = req.body.umob;
        let uaddress = req.body.uaddress;
        let query = `INSERT INTO user (uname,uemail,umob,uaddress) VALUES ('${uname}','${uemail}','${umob}','${uaddress}')`;
        // let query = "INSERT INTO user (name, uaddress, contact) VALUES('" + uname + "',,'" + uemail + "',,'" + umob + "','" + uaddress + "')";

        con.query(query, (err, results) => {
            if (err) throw err;
            console.log(results)
            res.send({ code: 200, results: results });
            // res.send('Student register success-full' + results.insertId);
            // console.log('Student register success-full' + res);
        });
    } catch (error) {
        console.log('error', error);
    }
});
// ** UPDATE by POST method
app.post('/update/items', (req, res) => {
    try {
        let uid = req.body.uid;
        let uname = req.body.uname;
        let uemail = req.body.uemail;
        let umob = req.body.umob;
        let uaddress = req.body.uaddress;
        let query = `UPDATE user SET uname='${uname}',uemail='${uemail}',umob='${umob}',uaddress='${uaddress}' WHERE uid='${uid}'`;

        con.query(query, (err, results) => {
            if (err) throw err;
            res.send({ code: 200, results: results });
            // res.send('Student register success-full' + results.insertId);
            // console.log('Student register success-full' + res);
        });
    } catch (error) {
        console.log('error', error);
    }
});
// ** DELETE by POST method
app.post('/delete/items', (req, res) => {
    try {
        let uid = req.body.uid;
        let query = `DELETE FROM user WHERE uid='${uid}'`;
        con.query(query, (err, results) => {
            if (err) throw err;
            res.send({ code: 200, results: results });
            console.log(results)
            // res.send('Student register success-full' + results);
            // console.log('Student register success-full', + results);
        });
    } catch (error) {
        console.log('error', error)
    }
});
// ------------------------CUSTOMER-------------------------------
app.get('/customers', (req, res) => {
    try {
        let query = "SELECT * FROM customer";
        con.query(query, (err, results) => {
            if (err) throw err;
            console.log(results);
            res.send({ code: 200, results: results });
        });
    } catch (error) {
        console.log('error', error);
    }
});

app.post('/add-customer', (req, res) => {
    try {
        let cname = req.body.cname;
        let cemail = req.body.cemail;
        let cmob = req.body.cmob;
        let caddress = req.body.caddress;

        let query = `INSERT INTO customer (cname,cemail,cmob,caddress) VALUES ('${cname}', '${cemail}', '${cmob}', '${caddress}')`;
        con.query(query, (err, results) => {
            if (err) throw err;
            console.log(results);
            res.send({ code: 200, results: results });
            // res.send('Student register success-full' + results.insertId);
        });

    } catch (error) {
        console.log('error', error)
    }
});

app.post('/update-customer', (req, res) => {
    try {
        let cid = req.body.cid;
        let cname = req.body.cname;
        let cemail = req.body.cemail;
        let cmob = req.body.cmob;
        let caddress = req.body.caddress;
        let query = `UPDATE customer SET cname='${cname}',cemail='${cemail}',cmob='${cmob}',caddress='${caddress}' WHERE cid='${cid}'`;

        con.query(query, (err, results) => {
            if (err) throw err;
            res.send({ code: 200, results: results });
        });
    } catch (error) {
        console.log('error', error);
    }
});

app.post('/delete-customer', (req, res) => {
    try {
        let cid = req.body.cid;
        let query = `DELETE FROM customer WHERE cid='${cid}'`;
        con.query(query, (err, results) => {
            if (err) throw err;
            res.send({ code: 200, results: results });
            console.log(results)
        });
    } catch (error) {
        console.log('error', error);
    }
});

// /*---------------Server listening----------------------*/
app.listen(2000)
// app.listen(2000, () => {
//     console.log('Server started on port 2000...');
// });