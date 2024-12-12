import {db} from "../db/db";
import {postViewModel} from "../models/postModels";


export const postsRepository = {
    getPosts() {
        return db.posts
    },

    getPostById(id:string) {
        const post = db.posts.find(b => b.id == id)
        if(!post) return null
        return post
    },

    deletePost(id: string) {
        for(let i: number = 0; i < db.posts.length; i++){
            if(db.posts[i].id === id){
                db.posts.splice(i, 1)
                return true
            }
        }
        return false
    },

    create(post: postViewModel) {
        db.posts.push(post)
    },

    update(post: postViewModel) {
        db.posts = {...db.posts, ...post}
    }


}