import { Router } from "express";
import { EmployerController } from "../controllers/employerCtrl";

const employerController = new EmployerController();

const checker = (req: any, res: any) => {
  console.log('the data')
}

const router = Router();
// const { createJobPost } = EmployerController;

router.get("/viewAllJobPost", employerController.viewAllJobPost);
router.post("/createjob", employerController.createJobPost);


export default router;