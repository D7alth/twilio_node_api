const router = require('express').Router();
const create = require('../models/leads.crud.model/lead.create.db');
const update = require('../models/leads.crud.model/lead.update.db');
const listAll = require('../models/leads.crud.model/lead.list.all.db');
const listBy = require('../models/leads.crud.model/lead.list.by.id.db');
const deleteLead = require('../models/leads.crud.model/lead.delete.db');
const segmentsRelated = require('../models/relationship.model/lead.segmentation.list');
const send = require('../controllers/sender.controller'); 

router.post('/json/api/lead/create', (req, res) => {

    let leadName = req.body.leadName;
    let whatsapp = req.body.whatsapp;
    let email = req.body.email;
    let leadState = req.body.leadState;

    async function resolveCreateLead() {
        try {
            create.createElements(leadName, whatsapp, email, leadState).then(
                () => {
                    res.send(`${leadName}, ${whatsapp}, ${email}, ${leadState}`).status(200);
                }
            ).catch(e => {
                console.log(`error to create lead, error : ${e.message}`);
                res.send(`Lead not found : ${e}`).status(401);
            });
        }
        catch (err) {
            console.log(`internal server error : ${err}`);
            res.send(`internal server error`).status(500);
        }
    }

    resolveCreateLead();
});


router.post('/json/api/lead/update:id', (req, res) => {
    var id = req.params.id;
    let leadName = req.body.leadName;
    let whatsapp = req.body.whatsapp;
    let email = req.body.email;
    let leadState = req.body.leadState;

    id = id.slice(1);

    async function resolveUpdateLead() {
        try {
            update.updateElements(id, leadName, whatsapp, email, leadState).then(
                () => {
                    res.send('Updated').status(200);
                }
            ).catch(e => {
                console.log(e);
                res.send(`Lead not found : ${e}`).status(401);
            });
        }
        catch (err) {
            console.log(`internal server error : ${err}`);
            res.send(`internal server error`).status(500);
        }
    }

    resolveUpdateLead();
});

router.get('/json/api/lead/list', (req, res) => {
    var row;
    var ob;

    async function resolveElements() {
        try {
            ob = await listAll.getElements();
            console.log(typeof ob);
            row = Object.keys(ob).map(function (key) {
                return ob[key];
            });

            res.send(JSON.stringify(row)).status(200);

        } catch (e) {
            console.log(e);
            res.send(`Lead not found`).status(404);
        }
    };
    resolveElements();

});


router.get('/json/api/lead/list:id', (req, res) => {
    var id = req.params.id;
    var row, ob;

    id = id.slice(1);

    async function resolveElementsById() {
        try {
            ob = await listBy.getElementsById(id);
            console.log(typeof ob);
            row = Object.keys(ob).map(function (key) {
                return ob[key];
            });

            res.send(JSON.stringify(row)).status(200);

        } catch (e) {
            console.log(e);
            res.status(500);
        }
    };
    resolveElementsById();
});

router.get('/json/api/leads/related:id', (req, res) => {
    var id = req.params.id;
    id = id.slice(1);
    var row, ob;

    async function resolveRelatedSegments() {
        try {
            ob = await segmentsRelated.listJoinSegmentsByLeadId(id);
            console.log(ob);
            row = Object.keys(ob).map(function (key) {
                return ob[key]
            });
            res.send(JSON.stringify(row)).status(200);
        } catch (e) {
            console.log(e);
            res.send("not found").status(500);
        }
    }
    resolveRelatedSegments();

});


router.delete('/json/api/lead/delete:id', (req, res) => {
    var id = req.params.id;
    id = id.slice(1);

    async function resolveDelete() {
        try {
            deleteLead.deleteElements(id).then(
                () => {
                    res.send('Deleted').status(200);
                }
            ).catch(e => {
                console.log(e);
                res.send('lead not found').status(401);
            });
        }
        catch (err) {
            console.log(err);
            res.status(500);
        }
    }

    resolveDelete();
});
// capaming
/*router.post('/json/api/lead/send/', (req, res) => {
    var message = req.body.message;

    async function resolveSend() {
        try{    



        }catch(e){

        }
    }
});*/

module.exports = router;
