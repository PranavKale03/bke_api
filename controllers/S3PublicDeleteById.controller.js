import { deleteObject } from "../utils/aws.utils.js";

const S3PublicDeleteByIdController = async (req, res, next) => {
    try {
        let s3_object = await deleteObject(req.params.id)
        res.send({'status': s3_object });
    } catch (err) {
        console.log(err)
        res.status(400).send({
            'code': 400,
            'msg': 'Failed to delete object in S3'
        })
        return;
    }
}
    
export default S3PublicDeleteByIdController