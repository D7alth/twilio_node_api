const router = require('express').Router();
const lead = require('../controllers/create.lead.db');

router.post('/json/api/lead/create', (req, res) => {

    let leadName = req.body.leadName;
    let whatsapp = req.body.whatsapp;
    let email = req.body.email;
    let leadState = req.body.leadState;

    lead.createLead(leadName, whatsapp, email, leadState);
    res.send(`${leadName}, ${whatsapp}, ${email}, ${leadState}`).status(200);
});

module.exports = router;