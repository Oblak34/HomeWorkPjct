import {Blogs, db} from "../db/db";
import {blogCreateModel, blogViewModel} from "../models/blogModels";



export const blogsRepository = {
    getBlogs() {
        return db.blogs
    },

    getBlogsById(id:string) {
        const blog = db.blogs.find(b => b.id == id)
        return blog
    },

    create(blog: Blogs) {
        db.blogs.push(blog)
    },

    updateBlog(id: string, name: string, description: string, websiteUrl: string) {
        let foundBlog: blogViewModel | undefined = db.blogs.find(v => v.id === id)

        if (foundBlog) {
            foundBlog.name = name,
            foundBlog.description = description,
            foundBlog.websiteUrl = websiteUrl
            return foundBlog
        }
        return undefined
    },

    deleteBlog(id: string) {
        for(let i: number = 0; i < db.blogs.length; i++){
            if(db.blogs[i].id === id){
                db.blogs.splice(i, 1)
                return true
            }
        }
        return false
    }

}


