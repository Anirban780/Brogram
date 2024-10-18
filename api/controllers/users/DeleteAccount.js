import bcrypt from "bcryptjs";

import { User } from "../../models/User.js";
import { verifyToken } from "../../util/token.js";

async function deleteAccount(req) {
    let resStatus = 200;
    let resMessage = {};

    // verify that the user is authenticated
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    const user = await verifyToken(token);
    if (user === null) {
        resStatus = 400;
        resMessage = {"Error": "Not authenticated"};

        return { resStatus, resMessage };
    }

    const { password } = req.body;

    try {
        // check if the inputed password is the same as the stored password.
        if (!bcrypt.compare(password, user.password)) {
            resStatus = 400;
            resMessage = {"Error": "Passwords do not match!"};
            return { resStatus, resMessage };
        }

        // delete the users account.
        await User.findOneAndDelete({_id: user._id});

        resStatus = 200;
        resMessage = {"Message": "Account deleted."};
        return {resStatus, resMessage};
    } catch (err) {
        console.log(err);
        resStatus = 500;
        resMessage = {"Error": "Internal server error."};
        return { resStatus, resMessage };
    }
}

export default deleteAccount;