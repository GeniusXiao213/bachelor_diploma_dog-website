import mysql from "mysql";

export const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'xsw2#EDC',
    database:'dog-web',
    
})