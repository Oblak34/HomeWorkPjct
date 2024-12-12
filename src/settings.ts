import {config} from 'dotenv'
config() // добавление переменных из файла .env в process.env

export const SETTINGS = {
    PORT: process.env.PORT || 5000,
    CREDENTIALS: {
        ADMIN: 'admin',
        PASSWORD: 'qwerty'
    },
    PATH: {
        BLOGS: '/blogs',
        POSTS: '/posts',
        TESTS: '/testing/all-data'
    },
}