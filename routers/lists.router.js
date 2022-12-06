const router = require('express').Router();
const create = require('../models/lists.crud.model/lists.create.db');
const update = require('../models/lists.crud.model/lists.update.db');
const listAll = require('../models/lists.crud.model/lists.list.all.db');
const listBy = require('../models/lists.crud.model/lists.list.by.id.db');
const deleteLead = require('../models/lists.crud.model/lists.delete.db');

router.post('/json/api/lists/create', (req, res) => {

    let listName = req.body.listName;

    async function resolveCreateLists(){
        try{
            create.createElements(listName).then(
                () => {
                    res.send(`${listName}, created`).status(201);
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
    
    resolveCreateLists();
});

router.post('/json/api/lists/update:id', (req, res) => {
    var id = req.params.id;
    let listsName = req.body.segmentName;

    id = id.slice(1);

    async function resolveUpdateLists(){
        try{
            update.updateElements(id, listsName).then(
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
    
    resolveUpdateLists();
});

router.get('/json/api/lists/list', (req, res) => {
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

router.get('/json/api/lists/list:id', (req, res) => {
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

router.delete('/json/api/lists/delete:id', (req, res) => {
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