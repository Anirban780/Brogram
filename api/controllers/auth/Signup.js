import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import User from "../../models/User.js";
import { genToken } from "../../util/token.js";

async function signup(req) {
    // response passed to client
    let resStatus = 200;
    let resMessage = {};

    const {name, username, email, password, confirmPassword} = req.body;

    // Validate input and throw error for invalid input
    const validInput = await validateInput(username, email, password, confirmPassword);
    
    if (validInput !== null) {
        resStatus = 400;
        resMessage = {"error": validInput};

        return {resStatus, resMessage};
    }

    try {
        // hash user password
        const salt = await bcrypt.genSalt(12);
        const hashedPass = await bcrypt.hash(password, salt)

        // create and save new user object
        const newUser = new User({
            name,
            username,
            email,
            password: hashedPass
        });
        await newUser.save();
       
        // gen new token and send to user
        const token = genToken(newUser);
        resMessage = {"Message": "Signed up", "token": token};
        return {resStatus, resMessage}; 

    } catch (err) {
        console.log(err);

        resStatus = 500;
        resMessage = {"Error": "Internal server error."};
        
        return { resStatus, resMessage };
    }
}

async function validateInput(username, email, password, confirmPassword) {
    let error = false;
    let errors = [];
    
    // check if username is in use
    const usernameInUse = await User.findOne({username});
    if (usernameInUse) {
        error = true;
        errors.push("Username in use.");
    }

    // check if email is valid. If valid check if in use
    if (!validateEmail) {
        error = true;
        errors.push("Email is invalid.");
    } else {
        const emailInUse = await User.findOne({email});
        if (emailInUse) {
            error = true;
            errors.push("Email in use.");
        }
    }

    // checks that password and confirm password match
    if (password !== confirmPassword) {
        error = true;
        errors.push("Passwords do not match");
    }

    // if error returns errors if not returns null
    if (error) {
        return errors;
    } else {
        return null;
    }
}

// email validation function
function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

export default signup;
