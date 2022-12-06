const stringConnection = require('../config/db.config');

exports.updateLead = (id, leadName, whatsapp, email, leadState) => stringConnection.connect( err => {
    const sql = `UPDATE Leads SET leadName = '${leadName}', whatsapp = '${whatsapp}', 
    email = '${email}', leadState = '${leadState}' 
    WHERE _id = ${id};`;

    if(err){
        throw 'error connecting to database ' + err.message;
    }
    console.log("Connect"); 
    
   stringConnection.query(sql, (err, result, fields) => {    
        if(err){
            console.log(`Error to update lead ${err}`);
            return false;
        }
        else{
            console.log("Update lead success"); 
            console.log(`return : ${result}`);    
        }
    }); 
});


