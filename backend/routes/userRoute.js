const express = require('express');
const router = express.Router();
const UserModel = require('../db/models/users');

// SHORT INFO //
// Yes, I know that http has ("GET", "POST", "PUT", "PATCH", "DELETE"), but browser has default "GET" and I use this for testing my database.
// In the future I will change "GET" to appropriate request.
// // // // // // // // 

router.get('/', (req, res) => {
    res.send('Welcome to user')
})

router.get('/list', async (req, res) => {
    try {
        const userModelFind = await UserModel.find();
        res.json(userModelFind);
    } catch (err) {
        console.log(err)
    }
})

router.get('/list/new', async (req, res) => {
    const newUser = new UserModel({
        username: req.query.username,
        password: req.query.password
    })
    try {
        const newUserSaved = await newUser.save();
        console.log(newUser);
        res.json(newUserSaved)
    } catch (err) {
        res.json(err)
    }
})

router.get('/list/delete/:id', async (req, res) => {
    try {
        const deleteUser = await UserModel.deleteOne({ username: req.params.id });
        console.log(deleteUser);
        res.send(deleteUser)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;