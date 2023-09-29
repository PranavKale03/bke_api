import AWS_CONFIG from "../config/DevS3.js"
import crypto from 'crypto'
import sharp from 'sharp'
import AWS from 'aws-sdk'


AWS.config.update(AWS_CONFIG.credentials)
const s3 = new AWS.S3();

const uploadObject = async (req) => {
    try {
        const file = req.file
        const buf = await sharp(file.buffer)
            .resize({ height: 1920, width: 1080, fit: "contain" })
            .toBuffer()
        const hash = crypto.createHash("md5").update(buf).digest("hex")

        const params = {
            "Bucket": AWS_CONFIG.bucketName,
            "Key": AWS_CONFIG.imageDirectory + hash + AWS_CONFIG.imageFormat,
            "Body": buf,
            "ContentType": AWS_CONFIG.contentType
        }
        const uploadedFile = await s3.upload(params).promise();
        return uploadedFile.Location;
    } catch (err) {
        throw err;
    }
}

const getObject = async (key) => {
    console.log(key)
    try {
        const params = {
            "Bucket": AWS_CONFIG.bucketName,
            "Key": AWS_CONFIG.imageDirectory + key + AWS_CONFIG.imageFormat
        }
        const getFile = await s3.getObject(params).promise();
        return getFile;
    } catch (err) {
        throw err;
    }
}

const deleteObject = async (key) => {
    try {
        const params = {
            "Bucket": AWS_CONFIG.bucketName,
            "Key": AWS_CONFIG.imageDirectory + key + AWS_CONFIG.imageFormat
        }
        const deleteFile = await s3.deleteObject(params).promise();
        if (isEmpty(deleteFile)) {
            return "Object Deleted Successfully";
        }
        else {
            console.log(deleteFile)
            return "Error Deleting the Object"
        }
        
    } catch (err) {
        throw err;
    }
}

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

export { uploadObject, deleteObject }

export default getObject
