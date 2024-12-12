import {Router} from "express";
import {db} from "../db/db";


export const testRouter = Router();

testRouter.delete('/', (req, res) =>{
    db.blogs = [];
    db.posts = [];
    res.sendStatus(204)
})