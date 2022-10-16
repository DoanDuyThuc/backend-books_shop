const Staffs = require('../models/Staffs');

class siteController {

    async home(req,res) {
        res.send('hello')
    }
}

module.exports = new siteController;