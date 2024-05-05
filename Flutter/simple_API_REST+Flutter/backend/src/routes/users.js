const { Router } = require('express');
const router = Router();

const User = require('../models/User');
const faker = require('faker');

router.get('/api/users', async(req, res) => {
    const users = await User.find();
    res.json({users})
});

router.get('/api/users/create', async(req, res) => {
    for (let index = 0; index < 5; index++) {
        await User.create({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            avatar: faker.image.avatar()
        });
    }
    

    res.json('5 users added')
})

module.exports = router;