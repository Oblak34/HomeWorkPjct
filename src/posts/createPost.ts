import {RequestWithBody} from "../types/postsTypes";
import {Response} from "express";
import {postCreateModel, postViewModel} from "../models/postModels";
import {db} from "../db/db";
import {postsRepository} from "./posts-repository";
//убрать реквест
export function CreatePost(body: postCreateModel) {

    const blogName = db.blogs.find(b => b.id === body.blogId);

    if (!blogName) {
        return false
    }

    const newPost = {
        id: (+(new Date())).toString(),
        shortDescription: body.shortDescription,
        title: body.title,
        content: body.content,
        blogId: body.blogId,
        blogName: blogName.name
    }
    postsRepository.create(newPost);
    return newPost
}