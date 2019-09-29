const express = require('express');
const router = express.Router();

const expiryDate = new Date( Date.now() + 60 * 60 * 1000 ); // 1 hour

router.use(function(req, res, next) {

    // 輸出記錄訊息至終端機
    console.log(req.method, req.url);
  
    // 繼續路由處理
    next();
  });

router.post('/', function(req, res) {
    const { name } = req.body;
    res.cookie('login', name, {
        httpOnly: true,
        expires: expiryDate,
        path: '/data',
    });
    res.send('login success');
});

module.exports = router;