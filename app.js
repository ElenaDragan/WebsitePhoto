const path = require('path');
const express = require('express');

const app = express();

const photoRoutes = require('./routes/photo');
app.use(photoRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT || 3000, ()=> {
    console.log(`app is running`);
})