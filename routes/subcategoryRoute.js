import express from 'express'
import Subcategory from '../models/subcategoryModel.js';


const subcategoryRouter = express.Router();
subcategoryRouter.post('/add', async(req, res) => {
    
    const newsubCategory = new Subcategory({
        checked: req.body.checked,
        label: req.body.label,
      
    });
    const subcategory = await newsubCategory.save();
    res.send({
        _id: subcategory._id,
        checked: subcategory.checked,
        label: subcategory.label,
        
    })
});

// get all subcategory
subcategoryRouter.get('/all', async(req, res) => {
    const subcategory = await Subcategory.find();
    res.send(subcategory);
});

export default subcategoryRouter;