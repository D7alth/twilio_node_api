const stringConnection = require('../../config/db.config');


exports.getElementsById = (id) =>{
    return new Promise((resolve, reject) => {
        stringConnection.query(`SELECT * FROM Segmentation WHERE _id = ${id}`, (err, elements) => {
            if(err){return reject(err);}
            return resolve(elements);
        })
    })
} 

