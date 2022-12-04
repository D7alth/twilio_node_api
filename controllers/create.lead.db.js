const stringConnection = require('../config/db.config');


exports.createLead = (leadName, whatsapp, email, leadState) => stringConnection.connect( err => {
    const sql = `INSERT INTO Leads VALUES (DEFAULT, '${leadName}', '${whatsapp}', '${email}', '${leadState}', DEFAULT, DEFAULT);`
    if(err){
        throw 'error connecting to database ' + err.message;
    }
    console.log("Connect");  
    stringConnection.query(sql, err => {
        
        if(err) {
            throw 'error creating lead ' + err.message; 
        }else{
            console.log("Created");
            return true;
        } 

    });
});
