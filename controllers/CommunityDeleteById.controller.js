
import Community from "../models/Community.model.js";

const CommunityDeleteByIdController = async (req, res) => {
    try {
        const { id } = req.body

        const user = await Community.deleteOne({ _id: id })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export default CommunityDeleteByIdController