const express = require('express');
const app = express();

// public folder
app.use(express.static('public'));

//set view folder
app.set('view engine', "ejs")
//set route



//index.js
app.use(require('./controllers/index'));
app.use(require('./controllers/speakers'));

//views
//index.ejs
//speakers.ejs

app.listen(3000, () => {

    console.log('listening on port 3000');
    
})