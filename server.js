const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4459;
const apiRoute  = require('./routers/api.router.js');
const leadRoute = require('./routers/lead.router');
const segmentRoute = require('./routers/segmentation.router');
const relationshipRoute = require('./routers/relationship.router');
const listRoute = require('./routers/lists.router');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', apiRoute);
app.use(leadRoute);
app.use(segmentRoute);
app.use(relationshipRoute);
app.use(listRoute);

app.listen(PORT, () => {
    console.log(`API listing in http://localhost:${PORT}`);
});
