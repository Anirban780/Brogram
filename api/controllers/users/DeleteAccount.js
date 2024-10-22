import bcrypt from "bcryptjs";

import { User } from "../../models/User.js";

async function deleteAccount(req) {
    let resStatus = 200;
    let resMessage = {};

    const { password } = req.body;

    try {
        // check if the inputed password is the same as the stored password.
        if (!bcrypt.compare(password, req.user.password)) {
            resStatus = 400;
            resMessage = { Error: "Passwords do not match!" };
            return { resStatus, resMessage };
        }

        // delete the users account.
        await User.findOneAndDelete({ _id: req.user._id });

        resStatus = 200;
        resMessage = { Message: "Account deleted." };
        return { resStatus, resMessage };
    } catch (err) {
        console.log(err);
        resStatus = 500;
        resMessage = { Error: "Internal server error." };
        return { resStatus, resMessage };
    }
}

export default deleteAccount;
