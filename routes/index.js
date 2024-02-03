const express = require('express');
const {Readability} = require('@mozilla/readability');
const {JSDOM} = require('jsdom');
const router = express.Router();


/* GET home page. */
router.get('/', async function (req, res, next) {

    var url = new URL(req.query.u);;

    console.log(url);


    var html = await fetch(url).then(response => response.text())

    // console.log(html);

    var doc = new JSDOM(html, {
        url: url,
    });
    let reader = new Readability(doc.window.document);
    let article = reader.parse();


    // return json
    res.json(article);

});


module.exports = router;
