const stringConnection = require('../../config/db.config');

exports.createElements = (segmentationName) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO Segmentation VALUES (DEFAULT, '${segmentationName}', DEFAULT, DEFAULT);`

        stringConnection.query(sql, (err, elements) => {
            if(err){
                console.log(`error creating segmentation : ${err}`)
                return reject(err);
            }
            console.log("Created segmentation");
            return resolve(elements);
            
        })
    })
}