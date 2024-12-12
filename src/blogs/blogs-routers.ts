import {Router, Request, Response} from "express";
import {RequestWithBody, RequestWithParams, RequestWithParamsAndBody} from "../types/blogsTypes";
import {
    blogUpdateModel,
    blogCreateModel,
    blogViewModel,
    blogURImodel,
} from "../models/blogModels";
import {blogsRepository} from "./blogs-repository";
import {createBlog} from "./createBlog";
import {UpdateBlog} from "./updateBlog";
import {blogDescriptionValidator, blogNameValidator, blogWebsiteValidator} from "../validation/field-validator";
import {errorValidation} from "../validation/errorValidation";
import {authorization} from "../validation/authorization";



export const blogsRouter: Router = Router();


export const blogsController = {

    getBlogs: (req: Request, res: Response<blogViewModel[]>) => {
        const allBlogs: blogViewModel[] = blogsRepository.getBlogs()
        res.status(200).json(allBlogs)
    },

    getBlogsById: (req: RequestWithParams<blogURImodel>, res: Response<blogViewModel>) => {
        const foundBlog = blogsRepository.getBlogsById(req.params.id)
        if (!foundBlog) {
            res.sendStatus(404)
            return
        }
        res.status(200).send(foundBlog);
    },

    createBlog: (req: RequestWithBody<blogCreateModel>, res: Response<blogViewModel | null>) => {
        const body: blogCreateModel= req.body
        const blogId = createBlog(body);
        const blog = blogsRepository.getBlogsById(blogId)

        res.status(201).send(blog)
    },

    updateBlog: (req: RequestWithParamsAndBody<blogURImodel, blogUpdateModel>, res: Response<blogViewModel>) => {
        const id: string = req.params.id
        const body: blogUpdateModel = req.body

        const isUpdated = UpdateBlog(id, body)
        if (!isUpdated) {
            res.sendStatus(404)
            return;
        }
        res.status(200).send(isUpdated)
    },

    deleteBlogById: (req: RequestWithParams<blogURImodel>, res: Response) => {
        const isDeleted: boolean = blogsRepository.deleteBlog(req.params.id)
        if (isDeleted) {
            res.sendStatus(204)
            return
        }
        res.send(404)
    }
}

blogsRouter.get('/', blogsController.getBlogs);

blogsRouter.get('/:id', blogsController.getBlogsById);

blogsRouter.post('/',
    authorization,
    blogNameValidator,
    blogDescriptionValidator,
    blogWebsiteValidator,
    errorValidation,
    blogsController.createBlog);

blogsRouter.put('/:id',
    authorization,
    blogNameValidator,
    blogDescriptionValidator,
    blogWebsiteValidator,
    errorValidation,
    blogsController.updateBlog);

blogsRouter.delete('/:id',
    authorization,
    blogsController.deleteBlogById)