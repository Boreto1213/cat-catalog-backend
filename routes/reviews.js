import express from 'express';

import { getAllReviews, getAcceptedReviews, getUnacceptedReviews, createReview, deleteReview } from '../controllers/reviews.js';

const router = express.Router();

router.get('/all', getAllReviews);
router.get('/accepted', getAcceptedReviews);
router.get('/unaccepted', getUnacceptedReviews);
router.post('/upload', createReview);
router.delete('/:id', deleteReview);

export default router;