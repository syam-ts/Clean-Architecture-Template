import { User } from "./User";

export class JobSeeker extends User {
    name: string;
    constructor(name: string) {
        super(name);
        this.name = name;
    }

    getRole = (): string => {
        return "jobseeker";
    };

    applyJob = (
        name: string,
        mobile: number,
        age: number,
        place: string,
        skills: string[]
    ) => {
        
        return;
    };
viewAllJobPost = () => {
    return
    };
}
