//Create table for subcategory
import mongoose from 'mongoose'

const subcategorySchema = new mongoose.Schema({
    checked: {type: Boolean, required: true},
    label: {type: String, required: true},
},{
    timestamps: true //for date
});

export default mongoose.model('Subcategory', subcategorySchema);
