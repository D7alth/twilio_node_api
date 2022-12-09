const stringConnection = require('./../../config/db.config');

exports.listJoinLeadsBySegmentation = (segmentId) => {
    return new Promise((resolve, reject) => {
        let result = [], resultOb;
        const sql = `SELECT Leads.leadName, Segmentation.segmentName FROM
        Leads INNER JOIN Segmentation_Leads ON  Leads._id = Segmentation_Leads.lead_id
        INNER JOIN Segmentation ON  Segmentation_Leads.segmentation_id = 
        Segmentation._id WHERE Segmentation._id = ${segmentId} ORDER BY Leads._id`;

        stringConnection.query(sql, (err, elements) => {
            if (err) {
                console.log(`Error in join query : ${err}`);
                reject(err);
            }
            else {     
                console.log(`select join result : ${elements}`);
                resolve(elements);
            }
        });
    });
};

exports.listJoinSegmentsByLeadId = (leadId) => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT Leads.leadName, Segmentation.segmentName FROM
        Leads INNER JOIN Segmentation_Leads ON  Leads._id = Segmentation_Leads.lead_id
        INNER JOIN Segmentation ON  Segmentation_Leads.segmentation_id = 
        Segmentation._id WHERE Leads._id = ${leadId} ORDER BY Leads._id`;

        stringConnection.query(sql, (err, elements) => {
            if (err) {
                console.log(`Error in join query : ${err}`);
                reject(err);
            } else {
                console.log(`select join result : ${elements}`);
                resolve(elements);
            }
        });
    });
}

exports.listJoinAll = () => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT Leads.leadName, Segmentation.segmentName FROM
        Leads INNER JOIN Segmentation_Leads ON  Leads._id = Segmentation_Leads.lead_id
        INNER JOIN Segmentation ON  Segmentation_Leads.segmentation_id = 
        Segmentation._id ORDER BY Leads._id`;

        stringConnection.query(sql, (err, elements) => {
            if (err) {
                console.log(`Error in join query : ${err}`);
                reject(err);
            } else {
                console.log(`select join result : ${elements}`);
                resolve(elements);
            }
        });
    });
}