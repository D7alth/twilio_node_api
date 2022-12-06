const router = require('express').Router();
const create = require('../models/segments.crud.model/segmentation.create.db');
const update = require('../models/segments.crud.model/segmentation.update.db');
const listAll = require('../models/segments.crud.model/segmentation.list.all.db');
const listBy = require('../models/segments.crud.model/segmentation.list.by.id.db');
const deleteLead = require('../models/segments.crud.model/segmentation.delete.db');

router.post('/json/api/segment/create', (req, res) => {

    let segmentName = req.body.segmentName;

    create.createLead(segmentName);
    res.send(`${segmentName}, created`).status(200);
});

router.post('/json/api/segment/update:id', (req, res) => {
    var id = req.params.id;
    let segmentationName = req.body.segmentName;

    update.updateLead(id, segmentationName);
    res.send(`${segmentationName}, Updated`).status(200);
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

router.post('/json/api/segment/delete:id', (req, res) => {
    var id = req.params.id;   
    id = id.slice(1);
    
    deleteLead.deleteLead(id);
    res.send(`Lead id :${id}, Deleted`).status(200);
});

module.exports = router;