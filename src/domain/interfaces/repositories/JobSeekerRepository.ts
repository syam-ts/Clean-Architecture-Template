
export interface JobSeekerInterface {
    applyJob(
        name: string,
        mobile: number,
        age: number,
        place: string,
        skills: string[]
    ): Promise<any>;
}
