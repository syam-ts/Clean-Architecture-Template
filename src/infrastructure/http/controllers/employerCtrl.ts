import { Request, Response } from "express";
import { CreateJobPost } from "../../../use-cases/Employer/createJobPost";
import { EmployerDbRepository } from "../../repository-db/EmployerDbRepository";

const employerRepo = new EmployerDbRepository();
const createJobPost = new CreateJobPost(employerRepo);

export class EmployerController {
    constructor() {}

    async createJobPost(req: Request, res: Response): Promise<any> {
        try {
            console.log('the body',req.body)
            const result = await createJobPost.execute(req.body);
            res.json({ success: true, result }).status(201);
        } catch (err: any) {
            res.json({ success: false, message: err }).status(501);
        }
    }
}
