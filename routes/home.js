const {Router} = require('express')
const Product= require('../models/Product')
const router = Router()

router.get('/',async(req, res)=>{
    const products= await Product.find({}).lean()
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
        Floor: req.body.Floor,
        Description: req.body.Description
    }) 
    await product.save()
    res.redirect('/')
})



router.get('/insideproduct/:productid', async (req, res) => {
    var product = await Product.findById(req.params.productid).lean()
    res.render('insideproduct', {
        title: product.Adres,
        product
    })
})

router.post('/deleteproduct', async (req, res) => {
    const product = await Product.findById(req.body.id)
    await product.remove()
    res.redirect('/admin')
})



module.exports= router;