const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes');

const port = 3000
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/', routes);

app.listen(port, () => console.log(`Listening http://localhost:${port}`));