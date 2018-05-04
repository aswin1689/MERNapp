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
    .get((req, res) => {
        //looks at our Article Schema
        Article.find((err, articles) => {
            if (err) {
                res.send(err);
            }
            //responds with a json object of our database articles.
            res.json(articles);
        });
    })
    //post new article to the database
    .post((req, res) => {
        const article = new Article();
        //body parser lets us use the req.body
        article.author = req.body.author;
        article.title = req.body.title;
        article.content = req.body.content;
        article.publishedDate = req.body.publishedDate;

        article.save(err => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Article has been added successfully.' });
        });
    });

// update and delete an article using /articles/:articleId
router
    .route('/articles/:articleId')
    //update an article in the database
    .put((req, res) => {
        console.log('found route put');
        Article.findById(req.params.articleId, (err, article) => {
            if (err) {
                res.send(err);
            }
            req.body.author ? (article.author = req.body.author) : null;
            req.body.content ? (article.content = req.body.content) : null;
            req.body.title ? (article.title = req.body.title) : null;
            req.body.publishedDate ? (article.publishedDate = req.body.publishedDate) : null;

            article.save(err => {
                if (err) {
                    res.send(err);
                }
                res.json({ message: 'Article has been updated successfully.' });
            });
        });
    })
    //delete an article in the database
    .delete((req, res) => {
        Article.remove({ _id: req.params.articleId }, err => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Article has been deleted successfully.' });
        });
    });

export default router;
