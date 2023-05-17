import mongoose from 'mongoose';
import ReviewModel from '../models/reviewModel.js';

export const getAllReviews = async (req, res) => {
    try {
        const reviews = await ReviewModel.find();
        
        res.status(200).json(reviews);
    } catch (error) {
        res.status(400).json({ error })
    }
}

export const getAcceptedReviews = async (req, res) => {
    try {
        const reviews = await ReviewModel.find({ accepted: true }).exec();

        res.status(200).json(reviews);
    } catch (error) {
        res.status(404).json({ error });
    }
}

export const getUnacceptedReviews = async (req, res) => {
    try {
        const reviews = await ReviewModel.find({ accepted: false});

        res.status(200).json(reviews);
    } catch (error) {
        res.status(404).json({ error });
    }
}

export const createReview = async (req, res) => {
    const review = req.body;

    const newReview = new ReviewModel(review);

    try {
        await newReview.save();

        res.status(200).json(newReview);
    } catch (error) {
        res.status(404).json({ error });
    }
}

export const deleteReview = async (req, res) => {
    const { id: _id } = req.body;

    if (mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('No review with that id!');
    }
    
    await ReviewModel.findOneAndRemove(_id);

    res.json({ message: 'Review deleted successfully!'});
}