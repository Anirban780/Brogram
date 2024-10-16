import mongoose from "mongoose";

const followerSchema = new mongoose.Schema({
    follower: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

const followingSchema = new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unqiue: true
    },
    following: {
        type: [followingSchema],
        required: true,
        default: []
    },
    followingCount: {
        type: Number,
        required: true,
        default: 0
    },
    followers: {
        type: [followerSchema],
        required: true,
        default: []
    },
    followerCount: {
        type: Number,
        required: true,
        default: 0
    },
    posts: {
        type: [mongoose.SchemaTypes.ObjectId],
        required: true,
        default: []
    },
    postCount: {
        type: Number,
        required: true,
        default: 0
    },
    banned: {
        type: Boolean,
        required: true,
        default: false
    },
    createdAt: {
        type: String,
        required: true,
        default: Date.now()
    }
});

export const User = mongoose.model("User", userSchema);
export const FollowerSchema = followerSchema;
export const FollowingSchema = followingSchema;