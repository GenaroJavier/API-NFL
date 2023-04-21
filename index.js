const express = require('express');
const app = express();
const port = 3000;

const routerApi = require('./routes');


app.use(express.json());

app.listen(port, () => {
    console.log('En funcionamiento: ' + port);
});

routerApi(app);
