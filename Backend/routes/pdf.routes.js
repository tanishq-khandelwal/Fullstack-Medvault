import { Router } from "express";
import { pdfService} from "../pdf/pdf-service.js";

const router = Router();

router.get('/invoice/:id', async (req, res, next) => {
    try {
        const patientId = req.params.id; // Extract patient ID from the URL parameter
        await pdfService(req, res, patientId); // Call pdfService function with req, res, and patientId parameters
    } catch (error) {
        next(error);
    }
});

export default router;
