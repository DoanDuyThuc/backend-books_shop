const mongoose = require('mongoose')

async function connect () {
    try {
        await mongoose.connect('mongodb+srv://admin:thucdz12345@cluster0.jv2vdzz.mongodb.net/manage_staff_dev');
        console.log('connect successfully !!!')
    } catch (error) {
        console.log('connect faill !!!')
    }
}

module.exports = { connect }
