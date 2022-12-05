const router = require('express').Router();
const create = require('../models/lead.create.db');
const update = require('../models/lead.update.db');
const listAll = require('../models/lead.list.all.db');
const listBy = require('../models/lead.list.by.id.db');
const deleteLead = require('../models/lead.delete.db');

router.post('/json/api/lead/create', (req, res) => {

    let leadName = req.body.leadName;
    let whatsapp = req.body.whatsapp;
    let email = req.body.email;
    let leadState = req.body.leadState;

    create.createLead(leadName, whatsapp, email, leadState);
    res.send(`${leadName}, ${whatsapp}, ${email}, ${leadState}`).status(200);
});

router.post('/json/api/lead/update:id', (req, res) => {
    var id = req.params.id;
    let leadName = req.body.leadName;
    let whatsapp = req.body.whatsapp;
    let email = req.body.email;
    let leadState = req.body.leadState;

   

    update.updateLead(id, leadName, whatsapp, email, leadState);
    
    res.send(`${leadName}, Updated`).status(200);
});

router.get('/json/api/lead/list', (req, res) => {
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

router.get('/json/api/lead/list:id', (req, res) => {
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

router.post('/json/api/lead/delete:id', (req, res) => {
    var id = req.params.id;   
    id = id.slice(1);
    
    deleteLead.deleteLead(id);
    res.send(`Lead id :${id}, Deleted`).status(200);
});

module.exports = router;