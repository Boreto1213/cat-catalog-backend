import mongoose from "mongoose";
import CatModel from "../models/catModel.js"

export const getCats = async (req, res) => {
    try {
        const cats = await CatModel.find();

        res.status(200).json(cats);
    } catch (error) {
        res.status(404).json({ error });
    }
}

export const createCat = async (req, res) => {
    const cat = req.body;

    const newCat = new CatModel(cat);

    try {
        await newCat.save();
        
        res.status(200).json(newCat);
    } catch (error) {
        res.status(409).json({ error });
    }
}

export const updateCat = async (req, res) => {
    const { id: _id } = req.params;
    const cat = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('No cat that id!');
    }

    const updatedCat = await CatModel.findByIdAndUpdate(_id, cat, { new: true });

    res.json(updatedCat);
}

export const deleteCat = async (req, rse) => {
    const { id: _id  } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('No cat that id!');
    }

    await CatModel.findByIdAndRemove(_id);

    res.json({ message: 'Post deleted successfully!'});
}