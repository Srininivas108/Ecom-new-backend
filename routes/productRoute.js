import express from 'express'
import Product from '../models/productModel.js';


const productRouter = express.Router();

// for add post -> from admin panel
productRouter.post('/add', async(req, res) => {
    const newProduct = new Product({
        title: req.body.title,
        category: req.body.category,
        subcategory: req.body.subcategory,
        description: req.body.description,
        price:req.body.price,
        star:req.body.star,
        sizes:req.body.sizes,
        colors:req.body.colors,
        image:req.body.image,
        imageOne:req.body.imageOne
    });
    const product = await newProduct.save();
    res.send({
        _id: product._id,
        title: product.title,
        description: product.description,
    })
});


// get all products -> for frontend
productRouter.get('/all', async(req, res) => {
    const products = await Product.find();
    res.send(products);
});

//get product by id
productRouter.get('/:id', async(req, res) => {
    const product = await Product.findById(req.params.id);
    if(product) {
        res.send(product);
    } else {
        res.status(404).send({message: "Product not found!"});
    }
})

export default productRouter;