import { User } from "../../models/User.js";
import { verifyToken } from "../../util/token.js";

async function follow(req) {
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

    const {userId} = req.body;

    try {
        // find the user in the database
        const userToFollow = await User.findOne({_id:userId});
        if (userToFollow === null) {
            resStatus = 400;
            resMessage = {"Error": "User not found."};
            return {resStatus, resMessage};
        }

        // Check if the user is already following
        let userAlrFollowing = false;
        let followers = userToFollow.followers;
        let followId;
        let followingId;

        if (userToFollow.followerCount !== 0) {
            let x = 0;

            while (x !== userToFollow.followerCount) {
                if (followers[x].follower.equals(user._id)) {
                    userAlrFollowing = true;
                    followId = followers[x]._id;
                }
                x++;
            }

            if (userAlrFollowing && user.followingCount !== 0) {
                x = 0;
                while (x !== user.followingCount) {
                    if (user.following[x].user.equals(userToFollow._id)) {
                        followingId = user.following[x]._id;
                    }
                    x++;
                }
            }
        }

        // follows if not followed already. unfollows if already followed
        if (userAlrFollowing) {
            const follow = userToFollow.followers.id(followId);
            userToFollow.followerCount--;
            follow.deleteOne();

            const following = await user.following.id(followingId);
            following.deleteOne();
            user.followingCount--;

            resStatus = 200;
            resMessage = {"Message": "Unfollowed user."};
        } else {
            userToFollow.followers.push({
                follower: user._id
            });
            userToFollow.followerCount++;

            user.following.push({
                user: userToFollow._id
            });
            user.followingCount++;

            resStatus = 200;
            resMessage = {"Message": "Followed user"};
        }

        // save changes to the database
        await user.save();
        await userToFollow.save();
        return {resStatus, resMessage};

    } catch (err) {
        console.log(err);
        resStatus = 500;
        resMessage = {"Message": "Internal server error"};
    }
}

export default follow;