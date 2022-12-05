const stringConnection = require('../config/db.config');

exports.deleteLead = (id) => stringConnection.connect( err => {
    const sql = `DELETE FROM Leads WHERE _id = ${id};`;

    if(err){
        throw 'error connecting to database ' + err.message;
    }
    console.log("Connect"); 
    
   stringConnection.query(sql, (err, result, fields) => {    
        if(err){
            console.log(`Error to delete lead ${err}`);
            return false;
        }
        else{
            console.log("Delete lead success"); 
            console.log(`return : ${result}`);    
        }
    }); 
});

