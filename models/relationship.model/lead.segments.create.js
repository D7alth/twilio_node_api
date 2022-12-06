const stringConnection = require('../../config/db.config');

exports.createRelationship = (leadId, segmentId) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO Segmentation_Leads VALUES (${leadId}, ${segmentId});`;

        stringConnection.query(sql, (err, elements) => {
            if(err){
                console.log(`Error to create segmentation relationship : ${err}`)
                return reject(err);
            }
            console.log("relationship created");
            return resolve(elements);
        })
    })
}
