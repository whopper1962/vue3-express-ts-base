import type { User } from "@/types/users";
import { ApiService } from "./ApiService";

interface IUsersApiService {
  fetchAll(): Promise<User[]>;
}

class UsersApiService extends ApiService implements IUsersApiService {
  async fetchAll(): Promise<User[]> {
    return await this.get<User[]>("/users");
  }
}

export const usersApiService: UsersApiService = new UsersApiService();
