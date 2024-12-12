import {NextFunction, Response, Request} from "express";
import {SETTINGS} from "../settings";


export const authorization = (req: Request, res: Response, next: NextFunction) => {

    let data = `${SETTINGS.CREDENTIALS.ADMIN}:${SETTINGS.CREDENTIALS.PASSWORD}`
    console.log("data",data)

    let base64data = Buffer.from(data).toString('base64')

    console.log("base64data",base64data)

    const validAuthValue = `Basic ${base64data}`
    let authHeader = req.headers['authorization']
    console.log("authHeader",authHeader)
    console.log("validAuthValue",validAuthValue)
    if(authHeader && authHeader === validAuthValue) {
        next()
    }else res.status(401).send('Not authorized')
}