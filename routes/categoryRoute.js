import express from 'express'
import Category from '../models/categoryModel.js';


const categoryRouter = express.Router();

categoryRouter.post('/add', async(req, res) => {
    
    const newCategory = new Category({
        value: req.body.value,
        label: req.body.label,
      
    });
    const category = await newCategory.save();
    res.send({
        _id: category._id,
        value: category.value,
        label: category.label,
        
    })
});

// get all category
categoryRouter.get('/all', async(req, res) => {
    const category = await Category.find();
    res.send(category);
});

export default categoryRouter;