import getObject from "../utils/aws.utils.js";

const S3PublicByIdController = async (req, res, next) => {
    try {
        let s3_object = await getObject(req.params.id)
        res.send({'s3_object': s3_object });
    } catch (err) {
        console.log(err)
        res.status(400).send({
            'code': 400,
            'msg': 'Failed to search object in S3'
        })
        return;
    }
}
    
export default  S3PublicByIdController