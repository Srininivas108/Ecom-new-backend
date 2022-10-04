import express from 'express'
import Rating from '../models/ratingModel.js';


const ratingRouter = express.Router();

ratingRouter.post('/add', async(req, res) => {
    
    const newRating = new Rating({
        value: req.body.value,
        label: req.body.label,
      
    });
    const rating = await newRating.save();
    res.send({  
        _id: rating._id,
        value: rating.value,
        label: rating.label,
        
    })
});


// get all rating
ratingRouter.get('/all', async(req, res) => {
    const rating = await Rating.find();
    res.send(rating);
});

export default ratingRouter;