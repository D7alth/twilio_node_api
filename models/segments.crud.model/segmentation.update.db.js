const stringConnection = require('../config/db.config');


exports.updateSegment = (id, segmentationName) => stringConnection.connect( err => {
    const sql = `UPDATE Segmentation SET segmentationName = '${segmentationName}'
    WHERE _id = ${id};`;

    if(err){
        throw 'error connecting to database ' + err.message;
    }
    console.log("Connect");  
    stringConnection.query(sql, err => {
        
        if(err) {
            throw 'error update segmentation ' + err.message; 
        }else{
            console.log("Updated segmentation");
            return true;
        } 

    });
});
