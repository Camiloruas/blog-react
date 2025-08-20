import { PostRepository } from "./post-repository";
import { PostModel } from "@/models/post/post-model";

const ROOT_DIR = process.cwd();

export class JsonPostRepository implements PostRepository {
    private async readFromDisk() {}
    async findAll(): Promise<PostModel[]> {
        return [];
    }
}
export const jsonPostRepository = new JsonPostRepository();
console.log(ROOT_DIR);

console.log("teste 123");
