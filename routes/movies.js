const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to this patch')
})

router.get('/news', (req, res) => {
    res.send('Welcome to this patch news')
});

module.exports = router;