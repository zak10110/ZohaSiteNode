const {Router} = require('express')
const router = Router()
router.get('/',async(req, res)=>{
    res.render('index', {title: 'ZohaDom'})
})

router.get('/admin',async(req, res)=>{
    res.render('admin', {title: 'ZohaDom'})
})
module.exports = router