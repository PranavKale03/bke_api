import User from "../models/User.model.js";

const UserCreateController = async (req, res, next) => {
    const { ...data } = req.body
    try {
        const response = await User.create(data)
        console.log(response)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

export default UserCreateController