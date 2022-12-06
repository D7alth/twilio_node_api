const stringConnection = require('../../config/db.config');

exports.deleteElements = (id) => {
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM Segmentation WHERE _id = ${id};`;
        stringConnection.query(sql, (err, elements) => {
            if(err){
                console.log(`Error to delete elements ${err}`)
                return reject(err);
            }

            console.log("Segment deleted");
            return resolve(elements);
            
        })
    })
}