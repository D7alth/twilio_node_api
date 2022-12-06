const stringConnection = require('../../config/db.config');

exports.updateElements = (id, listName) => {
    return new Promise((resolve, reject) => {
        const sql = `UPDATE Lists SET list_name = '${listName}'
        WHERE _id = ${id};`;

        stringConnection.query(sql, (err, elements) => {
            if(err){
                console.log(`Error to update list ${err}`)
                return reject(err);
            }
            console.log("List updated");
            return resolve(elements);
            
        })
    })
}
