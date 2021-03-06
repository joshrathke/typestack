import { NextFunction, Request, Response } from "express";

export class UsersController {

    /**
	 * Get and return all Users from the DB
	 *
	 * @param {Request} req The Express Request Object
	 * @param {Response} res The Express Response Object
	 * @param {NextFunction} next The Express Next Function Object
	 */
    public getUsers = async (req: Request, res: Response, next: NextFunction) => {

    }

    /**
     * Get and return a single User from the DB
	 *
	 * @param {Request} req The Express Request Object
	 * @param {Response} res The Express Response Object
	 * @param {NextFunction} next The Express Next Function Object
     */
    public getUser = async (req: Request, res: Response, next: NextFunction) => {

	}

	public putUser = async (req: Request, res: Response, next: NextFunction) => {

	}
}
