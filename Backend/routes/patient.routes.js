import { Router } from "express";
import {
  AllPatients,
  addPatient,
  getAllPatients,
} from "../controllers/patient.controllers.js";
import { generatePrescription } from "../controllers/prescription.controllers.js";
import { HealthDetails, getPatientList } from "../controllers/details.controller.js";
const router = Router();

router.post("/addPatient", addPatient);
router.post("/getPatient", getAllPatients);
router.get("/allPatient",AllPatients);
router.post("/submitPresciption",generatePrescription);
router.post("/healthDetails",HealthDetails);
router.get("/patientList/:docid",getPatientList)

export default router;
