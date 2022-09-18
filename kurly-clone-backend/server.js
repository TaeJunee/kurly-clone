const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());

const AuthRoute = require('./routes/auth/auth');


mongoose.connect('mongodb://localhost:27017/testdb', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error', (err) => {
  console.log(err);
})

db.once('open', () => {
  console.log('Database Connection Established!')
})

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})


// app.use(express.static(path.join(__dirname, '../kurly-clone-frontend/build')))

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, '../kurly-clone-frontend/build/index.html'))
// })

app.use('/api', AuthRoute);



// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, '../kurly-clone-frontend/build/index.html'))
// })