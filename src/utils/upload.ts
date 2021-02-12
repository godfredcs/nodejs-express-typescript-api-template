import {Request} from 'express';
import multer, {FileFilterCallback} from 'multer';

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, '../../public/');
    },

    filename(req, file, cb) {
        cb(null, new Date().getTime() + file.originalname);
    }
});

const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter
});

export default upload;
