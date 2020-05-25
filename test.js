const http = require('http');
const fs = require('fs');
const url = require('url');
var mysql = require('mysql');

var con;

function insertIntoDB(usern, passw) {
    console.log("Connected!");
    var sql = "INSERT INTO authorizedusers (userName, password) VALUES" +
        " ('"+usern+"', '"+passw+"')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        return "Inserted 1 row";
    });
}

http.createServer(function (req, res) {

    con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "MyStar"
    });

    let strResults = "";

    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM authorizedusers", function (err, result, fields) {
            if (err) throw err;

            for (let i = 0; i < result.length; i++) {

                console.log("hello" + result[i]);

                strResults += ("<tr>\n<td>" + result[i].userName + "</td>" +
                    "\n <td>" + result[i].password + "</td>" +
                    "\n <td>" + result[i].CUST_ID + "</td>\n</tr>");
            }

            console.log(strResults);
            strResults += "</table>\n</body>\n</html>";

        });
    });

    const q = url.parse(req.url, true);

    res.writeHead(200, {'Content-type': 'text/html'});
    fs.readFile("./form.html", function (err, data) {

        if (err) {
            res.writeHead(200, {'Content-type': 'text/html'});
            return res.end("404 error not found.")
        }
        res.write(data);
        res.write(strResults);
    });

    if (q.pathname == "/form") {
        const query = q.query;
        console.log(query);
        console.log(query.username);
        console.log("You did a get from form.");
        console.log(q.pathname);
        res.write("UserName: " + query.username);
        res.write("<br>Password: " + query.password);
        let queryRes = insertIntoDB(query.username, query.password);
        console.log("Inserted 1 row");
        con.destroy();
    }

}).listen(8080);


