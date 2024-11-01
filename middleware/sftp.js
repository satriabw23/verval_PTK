const multer = require('multer');
const sftpStorage = require('multer-sftp');

const storage = sftpStorage({
    sftp: {
        host: process.env.SFTP_HOST,
        port: parseInt(process.env.SFTP_PORT),
        username: process.env.SFTP_USERNAME,
        password: process.env.SFTP_PASSWORD
    },
    destination: function (req, file, cb) {
        const filePath = process.env.SFTP_PATH
        cb(null, filePath)
    },
    filename: function (req, file, cb) {
        const filename = 'image-' + Date.now() + '-' + file.originalname;
        req.body.imageUrl = process.env.PUBLIC_IMAGE_URL + filename;
        cb(null, filename)
    }
})

const fileFilterImage = function (req, file, cb) {
    // accept image only
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|JPG|PNG|JPEG)$/)) {
        return cb(null, false);
    }
    cb(null, true);
}

const upload = {
    uploadImage : multer({ storage: storage, fileFilter : fileFilterImage }),
}

module.exports = upload