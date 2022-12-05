const router = require('express').Router();
const testSender = require('../controllers/testSender');

router.get('/', (req, res) => {
    testSender.sender('message test', '+556183360091');
    res.send('ok');
});

router.get('/json/api', (req, res) => {

    let message = req.body.message;
    let toNum = req.body.to;

    testSender.sender(message, toNum);

    res.send(message + ' ' + toNum);
    res.send('message type:' + typeof message);
    res.send('num type:' + typeof toNum);

    res.send('ok').status(200);

})

module.exports = router;