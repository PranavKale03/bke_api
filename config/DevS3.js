const AWS_CONFIG = {
    bucketName: "community-image-biker",
    imageDirectory: "public/",
    imageFormat: ".png",
    ContentEncoding: 'base64',
    contentType: 'image/png',
    ACL:'public-read',
    credentials: {
        accessKeyId: "AKIA4NVLLOO3Z6MCQZO6", // Access key ID
        secretAccessKey: "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", // Secret access key
        region: "ap-south-1" //Region
    }
}

export default AWS_CONFIG
