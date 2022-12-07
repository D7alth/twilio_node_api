const stringConnection = require('../../config/db.config');

exports.createRelationship = (leadId, listId) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO Lists VALUES (${leadId}, ${listId});`;

        stringConnection.query(sql, (err, elements) => {
            if(err){
                console.log(`Error to create List Relationship : ${err}`)
                return reject(err);
            }
            console.log("relationship created");
            return resolve(elements);
        })
    })
}
