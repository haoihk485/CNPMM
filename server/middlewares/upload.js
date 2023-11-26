import { CloudinaryStorage } from 'multer-storage-cloudinary'
import cloudinary from '../config/cloudinary.js'
import multer from 'multer'

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    folder: 'blog',
    allowedFormats: ['jpeg', 'png', 'jpg']
})
export default multer({ storage: storage })