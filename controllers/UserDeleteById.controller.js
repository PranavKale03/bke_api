
import User from "../models/User.model.js";

const UserDeleteByIdController = async (req, res) => {
    try {
        const { id } = req.body

        const user = await User.deleteOne({ _id: id })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export default UserDeleteByIdController