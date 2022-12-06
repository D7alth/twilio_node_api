const stringConnection = require('../../config/db.config');

exports.updateElements = (id, segmentationName) => {
    return new Promise((resolve, reject) => {
        const sql = `UPDATE Segmentation SET segmentName = '${segmentationName}'
        WHERE _id = ${id};`;

        stringConnection.query(sql, (err, elements) => {
            if(err){
                console.log(`Error to update elements ${err}`)
                return reject(err);
            }
            console.log("segment updated");
            return resolve(elements);
            
        })
    })
}
