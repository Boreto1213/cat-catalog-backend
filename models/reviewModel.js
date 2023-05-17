import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    author: String,
    email: String,
    content: String,
    accepted: Boolean,
    date: Date
});

const ReviewModel = mongoose.model('Review', reviewSchema, 'reviews');

export default ReviewModel;