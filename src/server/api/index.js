import express from 'express';
const router = express.Router();
const Article = require('../../../models/Article');

router.get('/', (req, res) => {
    res.render('index');
});

//adding the /articles route to our /api router
router
    .route('/articles')
    //retrieve all articles from the database
    .get(function(req, res) {
        //looks at our Article Schema
        Article.find(function(err, articles) {
            if (err) {
                res.send(err);
            }
            //responds with a json object of our database articles.
            res.json(articles);
        });
    })
    //post new article to the database
    .post(function(req, res) {
        const article = new Article();
        //body parser lets us use the req.body
        article.author = req.body.author;
        article.title = req.body.title;
        article.content = req.body.content;
        article.publishedDate = req.body.publishedDate;

        article.save(function(err) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Article successfully added!' });
        });
    });

export default router;
