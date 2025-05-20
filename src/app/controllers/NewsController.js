class NewsController {

    // [GET] /news
    index(req, res) {
        res.render('news')
    }

    // [GET] /news/:slug
    show() {
        console.log('detail')
    }

}

module.exports = new NewsController;