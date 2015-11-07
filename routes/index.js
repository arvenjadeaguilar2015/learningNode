var express = require('express');
var gfeed = require('google-feed-api');
var router = express.Router();

// Get Top 100 trailer
var feed = new gfeed.Feed('http://www.fandango.com/rss/trailers.rss');
feed.setNumEntries(30);
/* GET home page. */
router.get('/', function(req, res, next) {
    feed.listItems(function(item){
        console.log(item);
    });

  res.render('index', { title: 'Express' });
});




module.exports = router;
