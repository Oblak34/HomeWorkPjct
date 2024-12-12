import {blogCreateModel, blogViewModel} from "../models/blogModels";
import {blogsRepository} from "./blogs-repository";

export function  createBlog(body: blogCreateModel) {

    const newBlog: blogViewModel = {
        id: (+(new Date())).toString(),
        ...body
    }
    blogsRepository.create(newBlog)
    return newBlog.id
}