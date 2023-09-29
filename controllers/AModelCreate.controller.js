import AModel from "../models/AModel.model.js";

const AModelCreateController = async (req, res, next) => {
    const { ...data } = req.body
    try {
        const response = await AModel.create(data)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

export default AModelCreateController