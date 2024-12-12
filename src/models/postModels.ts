//с большой буквы
export type postViewModel = {
    id: string,
    title: string,
    shortDescription: string,
    content: string,
    blogId: string,
    blogName: string
}

export type postURImodel = {
    id: string
}

export type postCreateModel = {
    title: string,
    shortDescription: string,
    content: string,
    blogId: string
    blogName: string
}

export type postUpdateModel = {
    title: string,
    shortDescription: string,
    content: string,
    blogId: string
}