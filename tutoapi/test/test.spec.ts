import 'mocha';
import mysql from 'mysql';
import chai from 'chai';

describe("Test", function() {
    it("A test example", function() {
        console.log("test")
    });
/*
    it("A mysql test example", function() {

        return new Promise( (resolve,reject) => {

            let MYSQL_HOST = process.env.MYSQL_HOST;
            let MYSQL_PORT: number = parseInt(process.env.MYSQL_PORT || "3306");
            let MYSQL_USER = process.env.MYSQL_USER;
            let MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
            let MYSQL_DATABASE = process.env.MYSQL_DATABASE;

            // Create a mysql connection object
            let con = mysql.createConnection({
                host: MYSQL_HOST,
                user: MYSQL_USER,
                port: MYSQL_PORT,
                password: MYSQL_PASSWORD,
                database: MYSQL_DATABASE
            });

            let users: any;

            con.connect(function (err: any) {
                if (err) reject(err);
                else {
                    con.query("SELECT * FROM USERS", function (err: any, result: any) {
                        if (err) reject(err);
                        else {
                            users = result;
                            console.log(result);
                            resolve(result);
                        }
                        con.destroy();
                    });
                }
            });
        })
        .then( (result:any) => chai.expect(result[0]?.name).to.equal("anne"));
    });
*/

});
