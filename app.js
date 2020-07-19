const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, './public');
const viewsPath = path.join(__dirname, './views');

app.listen(3001, () => {console.log("http://127.0.0.1:3001")});

app.set('view engine', 'pug');
app.set('views', viewsPath);
app.locals.pretty = true;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/", express.static(publicPath));