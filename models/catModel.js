import mongoose from "mongoose";

// Add unique id maybe...
const catSchema = mongoose.Schema({
    name: String,
    age: String,
    breed: String,
    color: String,
    images: [String],
    sex: String,
    price: Number
});

const CatModel = mongoose.model('Cat', catSchema, 'cats');

export default CatModel;