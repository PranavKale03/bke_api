import AModel from "../models/AModel.model.js";

const AModelUpdateController = async (req, res) => {
    try {
        const { id, ...updates } = req.body
        const user = await AModel.findByIdAndUpdate({ _id: id }, { $set: { ...updates } }, { new: true }).exec()
        res.status(202).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export default AModelUpdateController