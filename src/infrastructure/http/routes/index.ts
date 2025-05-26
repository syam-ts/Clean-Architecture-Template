import { Router } from "express";
import { EmployerController } from "../controllers/employerCtrl";
import { JobSeekerController } from "../controllers/jobSeekerCtrl";
import { AdminController } from "../controllers/adminCtrl"

const router = Router();
const employerController = new EmployerController();
const jobSeekerController = new JobSeekerController();
const adminController = new AdminController();

const { viewAllJobPost, createJobPost } = employerController;
const { applyjob } = jobSeekerController;
const { deleteJobPost } = adminController;

// Employer
router.get("/viewAllJobPost", viewAllJobPost);
router.post("/createjob", createJobPost);

// Jobseeker
router.post('/applyjob', applyjob);

// Admin
router.post('/deletejob', deleteJobPost);

export default router;