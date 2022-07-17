const routes = require('express').Router();

const Career = require('./app/models/Career');

const career = Career;

career.getCareer()

routes.get('/', (req,res) => {
    res.render('main/index', {
        description: 'te'
    });
});

routes.get('/read-more', (req, res) => {
    res.render('main/read-more')
});

module.exports = routes;