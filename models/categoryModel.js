//Create table for category
import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
    value: {type: String, required: true},
    label: {type: String, required: true},
},{
    timestamps: true //for date
});

export default mongoose.model('Category', categorySchema);
