import {Router} from "express";
import {Request, Response} from "express";
import {postCreateModel, postUpdateModel, postURImodel, postViewModel} from "../models/postModels";
import {RequestWithBody, RequestWithParams, RequestWithParamsAndBody} from "../types/postsTypes";
import {postsRepository} from "./posts-repository";
import {CreatePost} from "./createPost";
import {UpdatePost} from "./updatePost";
import {
    blogIDValidator,
    contentValidator,
    postShortDescriptionValidator,
    postTitleValidator
} from "../validation/field-validator";
import {errorValidation} from "../validation/errorValidation";
import {authorization} from "../validation/authorization";



export const postsRouter: Router = Router();


const postsController = {
    getPosts: (req: Request, res: Response<postViewModel[]>) => {
        const allPost: postViewModel[] = postsRepository.getPosts()
        res.status(200).send(allPost)
    },

    getPostsById: (req: RequestWithParams<postURImodel>, res: Response<postViewModel>) => {
        const foundPost = postsRepository.getPostById(req.params.id)

        if (!foundPost) {
            res.sendStatus(404)
            return
        }
        res.status(200).send(foundPost);
    },

    createPost: (req: RequestWithBody<postCreateModel>, res: Response<postViewModel>) => {
        const body: postCreateModel = req.body
        const newPost:postViewModel|false  = CreatePost(body)

        if (!newPost) {
            res.sendStatus(404)
            return
        }
        res.status(201).send(newPost)
    },

    updatePost: (req: RequestWithParamsAndBody<postURImodel, postUpdateModel>, res: Response<postViewModel>) => {
        const body: postUpdateModel = req.body
        const id: string = req.params.id

        const updatePost = UpdatePost(id, body);
        if (!updatePost) {
            res.sendStatus(404)
            return;
        }
        res.status(200).send(updatePost)
    },

    deletePostById: (req: RequestWithParams<postURImodel>, res: Response) => {
        const isDeleted: boolean = postsRepository.deletePost(req.params.id)
        if (isDeleted) {
            res.sendStatus(204)
            return
        }
        res.sendStatus(404)
    },
}

postsRouter.get('/', postsController.getPosts);

postsRouter.get('/:id', postsController.getPostsById);

postsRouter.post('/',
    authorization,
    postTitleValidator,
    postShortDescriptionValidator,
    contentValidator,
    blogIDValidator,
    errorValidation,
    postsController.createPost);

postsRouter.put('/:id',
    authorization,
    postTitleValidator,
    postShortDescriptionValidator,
    contentValidator,
    blogIDValidator,
    errorValidation,
    postsController.updatePost);

postsRouter.delete('/:id',
    authorization,
    postsController.deletePostById)