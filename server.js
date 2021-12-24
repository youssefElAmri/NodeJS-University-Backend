const mongoose = require('./database/connect');
const express = require('express');
const bodyparser = require('body-parser');

const documentAPI = require('./routes/document');
const studentAPI = require('./routes/student');
const coursAPI = require('./routes/cours');
const examAPI = require('./routes/exam');

let app = express();
app.use(bodyparser.json());

app.use('/student', studentAPI);
app.use('/cours', coursAPI);
app.use('/document', documentAPI);
app.use('/exam', examAPI);

app.listen(8005, () => {
    console.log(`Server started on port 8005`);
});