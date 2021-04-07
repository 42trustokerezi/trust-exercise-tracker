/** requiring dependencies */
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();


/** creating express server */
const app = express();
const port = process.env.PORT || 5000;

/** middleware 
 * express.json() allows us to parse json 
*/
app.use(cors())
app.use(express.json());



const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
).then(()=> {
    console.log(`connection to database established`)
}).catch(err=>{
    console.log(`db error ${err.message}`);
    console.log(`db error ${err.message}`)
})
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');


app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);


//endpoint that starts the server
app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});