const stringConnection = require('../../config/db.config');

exports.createElements = (leadName, whatsapp, email, leadState) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO Leads VALUES (DEFAULT, '${leadName}', '${whatsapp}', '${email}', '${leadState}', DEFAULT, DEFAULT);`;

        stringConnection.query(sql, (err, elements) => {
            if(err){
                console.log(`Error to create Lead : ${err}`)
                return reject(err);
            }
            console.log("lead created");
            return resolve(elements);
            
        })
    })
}
