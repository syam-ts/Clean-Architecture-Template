import { EmployerRepository } from "../../domain/interfaces/repositories/EmployerRepository";

export class EmployerDbRepository implements EmployerRepository {
    private jobs: any[] = [];

    async createJobPost(job: any): Promise<any> {
        if (!job) throw new Error("incorrect job format");
        const newJobPost = this.jobs.push(job);
        return newJobPost;
    }
}
