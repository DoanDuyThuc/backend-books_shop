const Staffs = require('../models/Staffs');

class siteController {

    async home(req,res) {
        res.send('home')
    }
}

module.exports = new siteController;