
import AModel from "../models/AModel.model.js";

const AModelDeleteByIdController = async (req, res) => {
    try {
        const { id } = req.body

        const user = await AModel.deleteOne({ _id: id })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export default AModelDeleteByIdController