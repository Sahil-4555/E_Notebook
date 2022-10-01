const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors');

connectToMongo();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

//Available Routes
app.use('/api/auth', require('./routes/auth.js'))
app.use('/api/notes', require('./routes/notes.js'))

// app.get('/',(req,res)=>{
//     res.send('Sahil_4555! Welcome to Real Wrold!')
// })  

app.listen(port, () => {
  console.log(`inotebook backend listening at http://localhost:${port}`)
})

