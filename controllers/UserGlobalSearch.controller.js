import User from "../models/User.model.js";

const UserGlobalSearchController = async (req, res) => {
    const { ...data } = req.body
    const query = data.query
    const regexPattern = new RegExp(`${query}`, 'i');
    try {
        let response = await User.find(
            {
                user_name: { $regex: regexPattern },
            })
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export default UserGlobalSearchController