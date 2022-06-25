const {Router} = require('express')
const Product= require('../models/Product')
const router = Router()
router.get('/',async(req, res)=>{
    const products= await Product.find({})
    res.render('index', {title: 'ZohaDom', products})
})

router.get('/admin',async(req, res)=>{
    res.render('admin', {title: 'Admin Page'})
})

router.post('/createproduct',async(req, res)=>{
    const product = new Product(
    {
        Adres: req.body.Adres,
        Price: req.body.Price,
        IMG: req.body.IMG,
        RommsCount: req.body.RommsCount,
        Square: req.body.Square,
        Floor: req.body.Floor
    }) 
    await product.save()
    res.redirect('/')
})



module.exports = router