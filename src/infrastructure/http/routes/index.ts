import { Router } from "express";
import { EmployerController } from "../controllers/employerCtrl";
import { JobSeekerController } from "../controllers/jobSeekerCtrl";

const router = Router();
const employerController = new EmployerController();
const jobSeekerController = new JobSeekerController();

const { viewAllJobPost, createJobPost } = employerController;
const { applyjob } = jobSeekerController;

// Employer
router.get("/viewAllJobPost", viewAllJobPost);
router.post("/createjob", createJobPost);

// Jobseeker
router.post('/applyJob', applyjob);

export default router;