const stringConnection = require('../../config/db.config');

exports.deleteElements = (id) => {
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM Lists WHERE _id = ${id};`;
        stringConnection.query(sql, (err, elements) => {
            if(err){
                console.log(`Error to delete List ${err}`)
                return reject(err);
            }

            console.log("List deleted");
            return resolve(elements);
            
        })
    })
}
