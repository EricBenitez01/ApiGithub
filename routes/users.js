var express = require('express');
var router = express.Router();
var {show, List, details, repos, paginado}  = require("../controllers/usersController.js")
/* GET users listing. */
router.get('/', show);
router.get('/List', List);
router.get('/page/:number', paginado);
router.get('/detail/:username', details);
router.get('/detail/:username/repos', repos);


module.exports = router;
