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