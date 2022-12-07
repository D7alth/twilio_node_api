const router = require('express').Router();
const create = require('../models/segments.crud.model/segmentation.create.db');
const update = require('../models/segments.crud.model/segmentation.update.db');
const listAll = require('../models/segments.crud.model/segmentation.list.all.db');
const listBy = require('../models/segments.crud.model/segmentation.list.by.id.db');
const deleteLead = require('../models/segments.crud.model/segmentation.delete.db');
const relatedLeads =  require('../models/relationship.model/lead.segmentation.list');


router.post('/json/api/segment/create', (req, res) => {

    let segmentName = req.body.segmentName;

    async function resolveCreateSegment(){
        try{
            create.createElements(segmentName).then(
                () => {
                    res.send(`${segmentName}, created`).status(201);
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
    
    resolveCreateSegment();
});

router.post('/json/api/segment/update:id', (req, res) => {
    var id = req.params.id;
    let segmentationName = req.body.segmentName;

    id = id.slice(1);

    async function resolveUpdateSegment(){
        try{
            update.updateElements(id, segmentationName).then(
                () => {
                    res.send('Updated').status(200);
                }
            ).catch(e => {
                console.log(e);
                res.send(`Segmentation not found : ${e}`).status(401);
            });    
        }
        catch(err){
            console.log(`internal server error : ${err}`);
            res.send(`internal server error`).status(500);
        }
    }
    
    resolveUpdateSegment();
});

router.get('/json/api/segment/list', (req, res) => {
    var row;
    var ob;

     async function resolveElements(){
        try{
            ob = await listAll.getElements();
            console.log(typeof ob);
            row = Object.keys(ob).map(function(key){
                return ob[key];                                                                                                                                             
            });

            res.send(JSON.stringify(row));

        }catch(e){
            console.log(e);
        }
    };
    resolveElements();

});

router.get('/json/api/segment/list:id', (req, res) => {
    var id = req.params.id;
    var row, ob;

    id = id.slice(1);

     async function resolveElementsById(){
        try{
            ob = await listBy.getElementsById(id);
            console.log(typeof ob);
            row = Object.keys(ob).map(function(key){
                return ob[key];                                                                                                                                             
            });

            res.send(JSON.stringify(row)).status(200);

        }catch(e){
            console.log(e);
            res.status(500);
        }
    };
    resolveElementsById();
});

router.get('/json/api/segment/related:id', (req, res) => {
    var id = req.params.id;
    id = id.slice(1);
    var row, ob;

    async function resolveRelatedLeads(){
        try{
            ob = await relatedLeads.listJoinLeadsBySegmentation(id);
            console.log(ob);
            row = Object.keys(ob).map(function(key){ 
                return ob[key]
            });
            res.send(JSON.stringify(row)).status(200);
        }catch(e){
            console.log(e);
            res.send("not found").status(500);
        }
    }
    resolveRelatedLeads();


});

router.get('/json/api/segment/related', (req, res) => {
    var row, ob;

    async function resolveAll(){
        try{
            ob = await relatedLeads.listJoinAll();
            row = Object.keys(ob).map(function(key){ 
                return ob[key]
            });
            console.log(row);
            res.send(JSON.stringify(row)).status(200);
        }catch(e){
            console.log(e);
            res.send("not found").status(500);
        }
    }
    resolveAll();

});

router.delete('/json/api/segment/delete:id', (req, res) => {
    var id = req.params.id;   
    id = id.slice(1);
    
    async function resolveDelete(){
        try{
            deleteLead.deleteElements(id).then(
                () => {
                    res.send('Deleted').status(200);
                }
            ).catch(e => {
                console.log(e);
                res.send('Segment not found').status(401);
            });    
        }
        catch(err){
            console.log(err);
            res.status(500);
        }
    }
    
    resolveDelete();
});

module.exports = router;