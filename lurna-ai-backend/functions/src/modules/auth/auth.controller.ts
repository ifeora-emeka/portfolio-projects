import { Request, Response, NextFunction } from 'express'

export const getUserDependency = async (request: Request, response: Response, next: NextFunction) => {
    try {

    } catch (e) {
        next(e)
    }
}
