const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
const auth = require('./modules/auth/routes/auth');

app.use('/api/auth', auth);

app.listen(3001, ()=> {
    console.log(`Server is running on ${3001}`);
})