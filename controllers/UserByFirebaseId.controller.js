import User from "../models/User.model.js";

const UserByFirebaseIdController = async (req, res) => {
    try {
        const id  = req.params.id
        const user = await User.findOne({ uid: id })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export default UserByFirebaseIdController