import { Request, Response } from "express";
import { CreateJobPost } from "../../../use-cases/Employer/createJobPost";
import { ViewAllJobPost } from "../../../use-cases/Employer/viewAllJobPost";
import { EmployerDbRepository } from "../../repository-db/EmployerDbRepository";

const employerRepo = new EmployerDbRepository();
const createJobPostUseCase = new CreateJobPost(employerRepo);
const viewAllJobPostUseCase = new ViewAllJobPost(employerRepo);

export class EmployerController {
    constructor() {}

    async createJobPost(req: Request, res: Response): Promise<any> {
        try {
      
            const result = await createJobPostUseCase.execute(req.body);
            res.json({ success: true, result }).status(201);
        } catch (err: any) {
            res.json({ success: false, message: err }).status(501);
        }
    }

    async viewAllJobPost(req: Request, res: Response): Promise<any> {
        try {
            const result = await viewAllJobPostUseCase.execute();
            res.json({ success: true, result }).status(200);
        } catch (err: any) {
            console.log('Theerro', err)
            res.json({ success: false, message: err }).status(501);
        }
    }
}
