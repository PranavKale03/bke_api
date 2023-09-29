import Community from "../models/Community.model.js";

const CommunityCreateController = async (req, res, next) => {
    const { ...data } = req.body
    try {
        const response = await Community.create(data)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

export default CommunityCreateController