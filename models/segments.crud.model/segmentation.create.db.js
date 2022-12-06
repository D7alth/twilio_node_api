const stringConnection = require('../config/db.config');


exports.createSegment = (segmentationName) => stringConnection.connect( err => {
    const sql = `INSERT INTO Segmentation VALUES (DEFAULT, '${segmentationName}', DEFAULT, DEFAULT);`
    if(err){
        throw 'error connecting to database ' + err.message;
    }
    console.log("Connect");  
    stringConnection.query(sql, err => {
        
        if(err) {
            throw 'error creating segmentation ' + err.message; 
        }else{
            console.log("Created segmentation");
            return true;
        } 

    });
});
