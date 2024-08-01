
import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';

dotenv.config()

const storage = new GridFsStorage({
    url: process.env.MONGO_URI,
    // options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (request, file) => {
        console.log('File object:', file);
        const match = ["image/png", "image/jpg"];

        if (match.indexOf(file.mimeType) === -1) {
            return `${Date.now()}-file-${file.originalname}`
        }
        return {
        bucketName: "photos",
        filename: `${Date.now()}-file-${file.originalname}`
    }
}
});

const upload = multer({ storage });

export default upload;