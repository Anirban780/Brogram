import bcrypt from "bcryptjs";

import { genToken } from "../../util/token.js";
import User from "../../models/User.js";

async function login(req) {
    // response passed to client
    let resStatus = 200;
    let resMessage = {};

    const { username, password } = req.body;

    try {
        // find the user 
        const user = await User.findOne({username});
        if (!user) {
            resStatus = 400;
            resMessage = {"Error": "Invalid credentials"};
            return {resStatus, resMessage};
        }

        // compares the user password to the password input
        const passMatch = await bcrypt.compare(password, user.password);
        if (!passMatch) {
            resStatus = 400;
            resMessage = {"Error": "Invalid credentials."};
            return {resStatus, resMessage};
        }

        // gen new token and send to user
        const token = genToken(user);
        resMessage = {"Message": "Logged in.", "token": token};
        return {resStatus, resMessage};

    } catch (err) {
        console.log(err);
        resStatus = 500;
        resMessage = {"Error": "Internal server error."};
        return {resStatus, resMessage};
    }
}

export default login;
