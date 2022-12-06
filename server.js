const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4444;
const apiRoute  = require('./routers/api.router.js');
const leadRoute = require('./routers/lead.router');
const segmentRoute = require('./routers/segmentation.router');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', apiRoute);
app.use(leadRoute);
app.use(segmentRoute);


app.listen(PORT, () => {
    console.log(`API listing in http://localhost:${PORT}`);
});
