const mongoose = require('mongoose');
const mongoDbUrl = 'mongodb://127.0.0.1:27017'

mongoose.connect(mongoDbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('Connected')
});