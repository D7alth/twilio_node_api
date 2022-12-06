const stringConnection = require('../../config/db.config');

exports.createElements = (segmentationName) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO Lists VALUES (DEFAULT, '${segmentationName}', DEFAULT, DEFAULT);`

        stringConnection.query(sql, (err, elements) => {
            if(err){
                console.log(`error creating list : ${err}`)
                return reject(err);
            }
            console.log("Created List");
            return resolve(elements);
            
        })
    })
}
