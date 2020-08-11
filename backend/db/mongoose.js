const mongoose = require('mongoose');
const mongoDbUrl = 'mongodb://127.0.0.1:27017/users'

mongoose.connect(mongoDbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, () => {
    console.log('Connected')
});