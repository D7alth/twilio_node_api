const stringConnection = require('../../config/db.config');

exports.updateElements = (id, leadName, whatsapp, email, leadState) => {
    return new Promise((resolve, reject) => {
        const sql = `UPDATE Leads SET leadName = '${leadName}', whatsapp = '${whatsapp}', 
            email = '${email}', leadState = '${leadState}' 
            WHERE _id = ${id};`;

        stringConnection.query(sql, (err, elements) => {
            if(err){
                console.log(`Error to update elements ${err}`)
                return reject(err);
            }
            console.log("lead updated");
            return resolve(elements);
            
        })
    })
}
