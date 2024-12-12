import {body} from "express-validator";
import {blogsRepository} from "../blogs/blogs-repository";

// blogs - validators

export const blogNameValidator = body('name')
    .isString().withMessage('Type is not string').trim().notEmpty().withMessage('Name is required')
    .isLength({max: 15}).withMessage('Name should be max 15 characters long')

export const blogDescriptionValidator = body('description')
    .isString().withMessage('Type is not string').trim().notEmpty().withMessage('Description is required')
    .isLength({max: 500}).withMessage('Description should be max 500 characters long')

export const blogWebsiteValidator = body('websiteUrl')
    .isString().withMessage('Type is not string').trim().notEmpty().withMessage('Website is required')
    .isLength({max: 100}).withMessage('URL should be max 100 characters long')
    .matches('^http://([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$').withMessage('invalid symbols')

// posts - validators

export const postTitleValidator = body('title')
    .isString().withMessage('Type is not string').trim().notEmpty().withMessage('Title is required')
    .isLength({max: 15}).withMessage('Name should be max 30 characters long')

export const postShortDescriptionValidator = body('shortDescription')
    .isString().withMessage('Type is not string').trim().notEmpty().withMessage('ShortDescription is required')
    .isLength({max: 100}).withMessage('ShortDescription should be max 100 characters long')

export const contentValidator = body('content')
    .isString().withMessage('Type is not string').trim().notEmpty().withMessage('Content is required')
    .isLength({max: 1000}).withMessage('Content should be max 1000 characters long')

export const blogIDValidator = body('blogId')
    .isString().withMessage('Type is not string').trim().notEmpty().withMessage('Title is required')
    .custom(blogId => {
        const blog = blogsRepository.getBlogsById(blogId)
        return !!blog
    }).withMessage('No blog')