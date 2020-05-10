const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/static', express.static(path.join(__dirname, 'static')));
app.set('port', process.env.PORT || 3000);
app.use('/', require(path.join(__dirname, 'src/router')));
const port = app.get('port');
app.listen(port, function () {
    console.log('SERVER RUNNING IN PORT:', port);
});
