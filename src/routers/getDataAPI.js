const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    const { login } = req.cookies;

    if (typeof login === 'undefined') {
        return res.status(401).send(JSON.stringify({name: '請先登入'}));
    }
    
    res.send(JSON.stringify({
        name: login,
    }));
});

module.exports = router;