const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const url = s3.getSignedUrl('getObject', {
  Bucket: 'goi-ecommerce',
  Key: 'pictures/Brandon Bikini Top/brandon-top-1.webp',
  Expires: 60 * 60 // 1 hour
});

console.log(url);