const stringConnection = require('../../config/db.config');


exports.getElements = () =>{
    return new Promise((resolve, reject) => {
        stringConnection.query('SELECT * FROM Leads', (err, elements) => {
            if(err){return reject(err);}
            return resolve(elements);
        })
    })
} 


