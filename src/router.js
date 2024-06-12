const { Router } = require('express');
const Sample = require('./api/sample/sample.routes')

const router = Router();

router.use('/sample',Sample)

module.exports = router;