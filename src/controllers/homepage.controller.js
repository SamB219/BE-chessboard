
const router = require('express').Router();

router.get('/',  async (req, res) => {
    return res.send('whatup');
})


module.exports = router;