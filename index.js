const express = require('express');
const app = express();

// set static folder
app.use(express.static(__dirname));

// start server
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log(`server is listening on port ${app.get('port')}`);
    console.log(__dirname)
});