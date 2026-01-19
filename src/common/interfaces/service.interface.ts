export interface IService {
    findAll(): Promise<any>;
    findById(userId: String): Promise<any>
    create(user: any): Promise<any>
    update(updateUser: any): Promise<any>
    delete(deleteUser: any): Promise<any>
}