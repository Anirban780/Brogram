import { User } from "../../models/User.js";

async function follow(req) {
    let resStatus = 200;
    let resMessage = {};

    const { userId } = req.params;

    try {
        // find the user in the database
        const userToFollow = await User.findOne({ _id: userId });
        if (userToFollow === null) {
            resStatus = 400;
            resMessage = { Error: "User not found." };
            return { resStatus, resMessage };
        }

        // Check if the user is already following
        let userAlrFollowing = false;
        let followers = userToFollow.followers;
        let followId;
        let followingId;

        if (userToFollow.followerCount !== 0) {
            let x = 0;

            while (x !== userToFollow.followerCount) {
                if (followers[x].follower.equals(req.user._id)) {
                    userAlrFollowing = true;
                    followId = followers[x]._id;
                }
                x++;
            }

            if (userAlrFollowing && req.user.followingCount !== 0) {
                x = 0;
                while (x !== req.user.followingCount) {
                    if (req.user.following[x].user.equals(userToFollow._id)) {
                        followingId = req.user.following[x]._id;
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

            const following = await req.user.following.id(followingId);
            following.deleteOne();
            req.user.followingCount--;

            resStatus = 200;
            resMessage = { Message: "Unfollowed user." };
        } else {
            userToFollow.followers.push({
                follower: req.user._id,
            });
            userToFollow.followerCount++;

            req.user.following.push({
                user: userToFollow._id,
            });
            req.user.followingCount++;

            resStatus = 200;
            resMessage = { Message: "Followed user" };
        }

        // save changes to the database
        await req.user.save();
        await userToFollow.save();
        return { resStatus, resMessage };
    } catch (err) {
        console.log(err);
        resStatus = 500;
        resMessage = { Message: "Internal server error" };
    }
}

export default follow;
