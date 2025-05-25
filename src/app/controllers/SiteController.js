const Course = require('../models/Course');

class SiteController {
    // [GET] /
    //next là function sẽ đẩy error vào middleware
    async home(req, res) {
        try {
            const courses = await Course.find({}).lean();
            res.render('home', { courses });
        } catch (err) {
            res.status(400).send('ERROR!');
        }
    }

    // [GET] /search
    search(req, res) {
        try {
            res.render('search');
        } catch (err) {
            res.status(400).send('ERROR!');
        }
    }
}

module.exports = new SiteController();
