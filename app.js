const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// database config
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost:27017/aps-pw26s', { useNewUrlParser: true });

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/clientes', require('./routes/clientes'));

app.listen(port, () => console.log(`SERVER RUNNING AT LOCALHOST:${port}`));

