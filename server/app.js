const express = require('express');
const app = express();
const PORT = 3000;

const cors = require('cors');
const path = require('path');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/img', express.static(path.join(__dirname, 'img')));

const routes=require('./routes');
app.use(routes);

app.listen(PORT, () => {
    console.log("App is listening at port: ", PORT)
})