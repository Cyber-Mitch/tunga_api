import { Request, Response } from "express";
import Auth from "../modules/auth";


const auth = new Auth();

class AuthController {




    static login(req: Request, res: Response) {

        const { email, pwd } = req.body;

        const result = auth.login(email, pwd);

        res.send({ message: result });
    }


    static register(request: Request, response: Response) {

        const { email, password, name } = request.body;

        const newUser = auth.register(name, email, password);

        response.send({ message: "Account successfully created", data: newUser })
    }

    static list_of_users(req: Request, res: Response) {

        const list = auth.listOfUser();

        res.send(list);
    }

    static get_user_by_email(req: Request, res: Response) {

        const { email } = req.query;

        const user = auth.getUserByEmail(email as string || "");

        res.send(user);
    }

    static emailVerification(req: Request, res: Response) {

        const { email, isVerified } = req.body;

        const user = auth.Email_Verified(email as string, isVerified);

        res.send({ message: "Account successfully updated", data: user })
    }


}


export default AuthController;



