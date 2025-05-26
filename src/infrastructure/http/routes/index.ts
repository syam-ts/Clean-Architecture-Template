import { Router } from "express";
import { EmployerController } from "../controllers/employerCtrl";
import { JobSeekerController } from "../controllers/jobSeekerCtrl";

const employerController = new EmployerController();
const jobSeekerController = new JobSeekerController();



const router = Router();
// const { createJobPost } = EmployerController;

// Employer
router.get("/viewAllJobPost", employerController.viewAllJobPost);
router.post("/createjob", employerController.createJobPost);

// Jobseeker
router.post('/applyJob', jobSeekerController.createJobPost)

export default router;