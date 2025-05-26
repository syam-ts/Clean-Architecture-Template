import { Router } from "express";
import { EmployerController } from "../controllers/employerCtrl";

const employerController = new EmployerController();

const checker = (req: any, res: any) => {
  console.log('the data')
}

const router = Router();
// const { createJobPost } = EmployerController;

router.post("/createjob",checker, employerController.createJobPost);


export default router;