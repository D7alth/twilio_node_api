const router = require('express').Router();
const send = require('../controllers/sender.controller');
router.post('/json/api/sender/', (req, res) => {
    body = req.body.message;
    send.sender(body);
    res.status(200).json({
        message:'success'
    });
})

module.exports = router;