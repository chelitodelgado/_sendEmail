const express = require('express');
const cors = require('cors');
const bodyParser =  require('body-parser');
const configMessage =  require('./configMessage');

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.post('/formulario', (req, res) =>{
    configMessage(req.body);
    res.status(200).send();
});

app.listen(3000, () => { // puerto 3000 0 3700
    console.log('Servidor Corriendo....')
});
