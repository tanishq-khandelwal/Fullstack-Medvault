import Document from "../models/document.models.js";
// import Patient from "../models/patient.models.js";
// import Document from "../models/document.models.js";
import AppError from "../utils/error.utils.js";
import cloudinary from "cloudinary";
import fs from 'fs/promises';

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'djidz0w9a',
  api_key: '392616642168116',
  api_secret: 'GTUIjmtmvGB8wi0JNd-wAa5H_Tw',
  timeout: 60000 
});

export const uploadDocument = async (req, res, next) => {
    const patientId=req.params.id;
    const {title }= req.body;

    try {
        if (!title || !patientId) {
            throw new AppError('All Fields are Required', 400);
        }

        let document;

        // File Upload
        if (req.file) {
            const result = await cloudinary.v2.uploader.upload(req.file.path, {
                folder: 'documents',
            });

            if (!result || !result.public_id || !result.secure_url) {
                throw new AppError('File upload to Cloudinary failed');
            }

            // Create Document entry in the database
            document = await Document.create({
                title,
                patientId,
                thumbnail: {
                    public_id: result.public_id,
                    secure_url: result.secure_url
                }
            });

            // Remove file from server
            await fs.rm(req.file.path);
        } else {
            throw new AppError('No file uploaded', 400);
        }

        // Send success response
        res.status(200).json({
            success: true,
            message: "Document Uploaded Successfully",
            document
        });
    } catch (error) {
        // Handle errors
        console.error('Error uploading document:', error);
        return next(error);
    }
};





export const getDocuments = async (req, res, next) => {
    const patientID = req.params.id;

    try {
        const patientDocuments = await Document.find({ patientId: patientID });

        if (!patientDocuments || patientDocuments.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No documents found for the patient ID"
            });
        }

        res.status(200).json({
            success: true,
            message: "Patient Documents",
            documents: patientDocuments
        });
    } catch (error) {
        console.error('Error fetching documents:', error);
        return next(new AppError("Error fetching documents", 500));
    }
};
