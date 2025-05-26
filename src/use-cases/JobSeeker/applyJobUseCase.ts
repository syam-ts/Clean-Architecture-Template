
import { JobSeekerInterface } from "../../domain/interfaces/repositories/JobSeekerRepository";

export class ViewAllJobPost {
  constructor(private jobSeekerInterface: JobSeekerInterface) {}

  async execute(jobApplication: any) {
    return await this.jobSeekerInterface.applyJob(jobApplication);
  }
}
