import {blogUpdateModel, blogViewModel} from "../models/blogModels";
import {blogsRepository} from "./blogs-repository";

export function UpdateBlog(id:string, body: blogUpdateModel){
    const blog = blogsRepository.getBlogsById(id)
    if(!blog){
        return false
    }
    blog.name = body.name
    blog.description = body.description
    blog.websiteUrl = body.websiteUrl
    return blog
}