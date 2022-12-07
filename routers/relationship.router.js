const router = require('express').Router();
const createList = require('../models/relationship.model/lead.lists.create');
const createSegment = require('../models/relationship.model/lead.segments.create'); 

router.post('/json/api/relationship/list/create', (req, res) => {

    let leadId = req.body.leadId;
    let listId = req.body.listId;

    async function resolveCreateRelationship(){
        try{
            createList.createRelationship(leadId, listId).then(
                () => {
                    res.send(`created`).status(201);
                }
            ).catch(e => {
                console.log(`error to create segmentation, error : ${e.message}`);
                res.send(`slq error : ${e}`).status(501);
            });    
        }
        catch(err){
            console.log(`internal server error : ${err}`);
            res.send(`internal server error`).status(500);
        }
    }
    
    resolveCreateRelationship();
});

router.post('/json/api/relationship/segment/create', (req, res) => {

    let leadId = req.body.leadId;
    let segmentId = req.body.segmentId;

    async function resolveCreateRelationship(){
        try{
            createSegment.createRelationship(leadId, segmentId).then(
                () => {
                    res.send(`created`).status(201);
                }
            ).catch(e => {
                console.log(`error to create segmentation, error : ${e.message}`);
                res.send(`slq error : ${e}`).status(501);
            });    
        }
        catch(err){
            console.log(`internal server error : ${err}`);
            res.send(`internal server error`).status(500);
        }
    }
    
    resolveCreateRelationship();
});

module.exports = router;