import { uploadObject } from "../utils/aws.utils.js";

const S3PublicCreateController = async (req, res, next) => {
    try {
        let url = await uploadObject(req)
        res.send({'s3_link': url });
    } catch (err) {
        console.log(err)
        res.status(400).send({
            'code': 400,
            'msg': 'Failed to upload object to S3'
        })
        return;
    }
}
    
export default S3PublicCreateController