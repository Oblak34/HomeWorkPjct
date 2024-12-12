import {RequestWithParamsAndBody} from "../types/postsTypes";
import {Response} from "express";
import {postsRepository} from "./posts-repository";
import {postUpdateModel, postURImodel, postViewModel} from "../models/postModels";


export function UpdatePost(id: string, body: postUpdateModel){
    const post = postsRepository.getPostById(id)
    if(!post){
        return false
    }

    post.title = body.title
    post.shortDescription = body.shortDescription
    post.content = body.content
    post.blogId = body.blogId

    postsRepository.update(post)

    return post
}