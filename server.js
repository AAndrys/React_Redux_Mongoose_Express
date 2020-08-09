const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
require('./db/mongoose');
// const UserModel = require('./db/models/users');

//////////
require('dotenv/config');

//movies
const moviesRouter = require('./routes/movies');
app.use('/movies', moviesRouter);

//User
const userRouter = require('./routes/userRoute');
app.use('/user', userRouter)
///////
app.get('/', (req, res) => {
    res.send('Welcome to our server')
})

app.listen(port, (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log('Server is running ' + port)
    }
})