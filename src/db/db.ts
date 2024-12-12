export type DBType = { // типизация базы данных (что мы будем в ней хранить)
    blogs: Blogs [],
    posts: Posts[]
}

export type Blogs = {
            id: string,
            name: string,
            description: string,
            websiteUrl: string
        }
export type Posts = {
            id: string,
            title: string,
            shortDescription: string,
            content: string,
            blogId: string,
            blogName: string
        }

export const db: DBType = { // создаём базу данных (пока это просто переменная)
    blogs: [
        {
            id: "1",
            name: 'Alex',
            description: 'Wild Animals',
            websiteUrl: 'http://animals'
        },
        {
            id: "2",
            name: 'Peter',
            description: 'Computer Graphic',
            websiteUrl: 'http://graphica'
        },
        {
            id: "3",
            name: 'Alena',
            description: 'Flowers',
            websiteUrl: 'http://botanica'
        }
    ],
    posts: [
        {
            id: '1',
            title: 'history',
            shortDescription: 'Tiger',
            content: 'fmkvmv m vk m km  km km k m mkm mmknudfhuef dc nvjd vj',
            blogId: '1',
            blogName: 'Alex'
        },
        {
            id: '2',
            title: 'Roses',
            shortDescription: 'The best flowers',
            content: 'clcmclmd kodk mdm mdmc mmdm jdjfckdsl lkldklk odjcdso o plspckkk cpd kp kpd',
            blogId: '3',
            blogName: 'Alena'
        },
        {
            id: '3',
            title: 'vector',
            shortDescription: 'Programming every day',
            content: 'ccmjj ijijdisoipwiuruiv oiufeoufuvoviu oiueoiefoe  uofuodivj oijidfjoid',
            blogId: '2',
            blogName: 'Peter'
        }
    ]
}


