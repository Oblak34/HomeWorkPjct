import express from 'express'
import {SETTINGS} from "./settings";
import {blogsRouter} from "./blogs/blogs-routers";
import {postsRouter} from "./posts/posts-routers";
import {testRouter} from "./testing/test-router";

export const app = express() // создать приложение


app.use(express.json()) // создание свойств-объектов body и query во всех реквестах


app.get('/', (req, res) => {
    // эндпоинт, который будет показывать на верселе какая версия бэкэнда сейчас залита
    res.status(200).json({version: '1.0'})
})

app.use(SETTINGS.PATH.BLOGS, blogsRouter)
app.use(SETTINGS.PATH.POSTS, postsRouter)
app.use(SETTINGS.PATH.TESTS, testRouter)


