const express = require('express') ;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();
app.use(cors());
app.use(express.json());

const exerciseRouter = require('./routes/exercise');
const userRouter =  require('./routes/users');
app.use('/users',userRouter);
app.use('/exercise',exerciseRouter);

/* const mongoURI ='mongodb://localhost:27017/reactt'
mongoose.connect(mongoURI,{ useNewUrlParser: true,useUnifiedTopology: true , useCreateIndex: true })
        .then(()=> console.log('connect'))
        .catch(err => console.log('err')) */
        
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true , useUnifiedTopology: true,   useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => { console.log('mongodb connected')});

app.use(bodyParser.urlencoded({
    extended: true 
}));
app.get('/',(req,res)=>{ 
    res.send("we are here");})
app.use(bodyParser.json());   

app.listen(4000);
console.log("server in port ${PORT}");

