require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

//Imported files
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const formRoutes = require('./routes/forms');

const app = express();


const port = process.env.PORT || 3030;

//DB connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('DB connected');
});

//Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//Routes
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', formRoutes);

//Starting a server
app.listen(port, () => {
    console.log('connected and running');
})