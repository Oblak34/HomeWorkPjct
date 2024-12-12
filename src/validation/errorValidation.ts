import {validationResult} from "express-validator";
import {Request, Response, NextFunction} from "express";

export const errorValidation = (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    const errors = validationResult(req);
    console.log('errors:', errors);

    if(!errors.isEmpty()) {
        const mapedError = errors.array({onlyFirstError: false});
        console.log(`mappedErros`, mapedError);

        const mapMappedErros = mapedError .map(err => {
            return {message: err.msg, field: (err as any).path}
        })


        console.log('mapMappedErros', mapMappedErros);

        res.status(400).send({
            errorsMessages: errors
                .array({onlyFirstError: true})
                .map(err => {
                    return {message: err.msg, field: (err as any).path}
                })
        })
        return
    }else{
        next()
    }
}