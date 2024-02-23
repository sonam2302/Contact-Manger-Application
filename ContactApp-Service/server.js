const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes/index");
const cors = require('cors');
const ConsulConfiguration = require('./consul-config.js');
// import ConsulConfiguration from "./consul-config.js";

require('dotenv').config() //its a dependency

const app = express();
ConsulConfiguration(app);

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
mongoose.connect(process.env.DB_URL);
mongoose.connection.once('open', (err)=> {
    if(!err){
        console.log("Connected to database")
    }
});

app.use('/api',routes);

// const port = 8000 || process.env.port;
// app.listen(port,()=>{
//     console.log(`server is running on port ${port}`);
// })

app.listen(process.env.HOST_PORT, () => {
    console.log(`Server running on port ${process.env.HOST_PORT}`);
  });
  