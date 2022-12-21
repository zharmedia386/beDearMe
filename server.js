require('dotenv').config()
const cors = require('cors')
const path = require('path');
const express = require("express");
const mongoose = require("mongoose");
const corsOptions = require('./config/corsOptions');
const data = require('./routes/datas')
const user = require('./routes/users')
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');

const app = express()

app.use(bodyParser.urlencoded({
   extended: false
}))
app.use(express.json())
// app.use(express.json('application/json'))
app.use(cookieParser());

app.use(credentials);
app.use(cors(corsOptions))
app.use(express.urlencoded({extended: false}))

app.use(data)
app.use(user)

mongoose.connect('mongodb+srv://syelvie:syelvie@cluster0.ejwcp7i.mongodb.net/dearme?retryWrites=true&w=majority', {
   useUnifiedTopology: true,
   useNewUrlParser: true
})
.then(() => console.log('Info: Database Connected'))
.catch(e => console.log(`Error: ${e}`))

app.listen(5000, () => console.log(`Info: Server Running at https://localhost:5000`))

