const stringConnection = require('../../config/db.config');

exports.deleteElements = (id) => {
    return new Promise((resolve, reject) => {
        stringConnection.query(`DELETE FROM Leads WHERE _id = ${id}`, (err, elements) => {
            if(err){
                console.log(`Error to delete elements ${err}`)
                return reject(err);
            }

            console.log("lead deleted");
            return resolve(elements);
            
        })
    })
}