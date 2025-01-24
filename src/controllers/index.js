class IndexController {
    static home(req, res) {
        res.render('index', { title: 'Portfolio Home' });
    }
}

module.exports = IndexController;