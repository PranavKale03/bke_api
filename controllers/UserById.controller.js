import User from "../models/User.model.js";

const UserByIdController = async (req, res) => {
    try {
        const id  = req.params.id
        const user = await User.find({ _id: id })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export default UserByIdController