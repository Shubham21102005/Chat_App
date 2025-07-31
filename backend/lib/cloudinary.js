import {v2 as cloudinary} from "cloudinary";
import { config } from "dotenv";
config();

// Validate required cloudinary environment variables
const requiredCloudinaryVars = ['CLOUDINARY_CLOUD_NAME', 'CLOUDINARY_API_KEY', 'CLOUDINARY_API_SECRET'];
for (const envVar of requiredCloudinaryVars) {
    if (!process.env[envVar]) {
        throw new Error(`Missing required Cloudinary environment variable: ${envVar}`);
    }
}

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,  
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

export default cloudinary;