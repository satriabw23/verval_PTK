const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './data')
    },
    filename: function (req, file, cb) {
        const filename = 'file-' + Date.now() + '-' + file.originalname.toString().replaceAll(' ','-');
        cb(null, filename)
    }
})


const upload = multer({ storage: storage });

module.exports = upload;