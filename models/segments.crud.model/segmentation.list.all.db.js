const stringConnection = require('../config/db.config');


exports.getElements = () =>{
    return new Promise((resolve, reject) => {
        stringConnection.query('SELECT * FROM Segmentation', (err, elements) => {
            if(err){return reject(err);}
            return resolve(elements);
        })
    })
} 

