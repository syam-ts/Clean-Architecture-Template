
export interface AdminRepository {

    deleteJobPost(jobPostId: string): Promise<any>
}