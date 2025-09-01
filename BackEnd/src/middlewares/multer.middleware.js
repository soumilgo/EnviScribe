import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

const storage = multer.diskStorage({
    destination: function (_req,_file,cb) {
        cb(null, './public/images/uploads');
    },
    filename: function (_req,file, cb) {
        const uniqueFilename = uuidv4();
        cb(null, uniqueFilename+path.extname(file.originalname));
    }
});

export const upload = multer({
    storage: storage,
});