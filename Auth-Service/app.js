import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import {Sequelize} from 'sequelize';
import routes from './routes/index.js';
import 'dotenv/config';

const app = express();
// Enable CORS for all routes
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


// const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USERNAME,process.env.DB_PASSWORD,
//     {
//         host: 'localhost',
//         dialect:'postgres',
//     } );

const sequelize = new Sequelize("authdatabase", "postgres", "Dance@232166", {
    host: "localhost",
    dialect: "postgres",
  });
  


    (async() => {
        try {
           await sequelize.authenticate();
           console.log('connected to database1') ;
        }
        catch(err){
            console.log(err);
        }
    })();

    app.use("/api", routes);




const port = 9000 || process.env.port;

app.listen(port,()=> {
console.log(`server is running on port ${port}`)
})