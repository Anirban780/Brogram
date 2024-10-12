import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    creator: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

const likeSchema = new mongoose.Schema({
    creator: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    comments: {
        type: [commentSchema],
        required: true,
        default: []
    },
    commentCount: {
        type: Number,
        required: true,
        default: 0
    },
    likes: {
        type: [likeSchema],
        required: true,
        default: []
    },
    likeCount: {
        type: Number,
        required: true,
        default: 0
    },
    creator: {
        type: mongoose.SchemaTypes.ObjectId,
        requried: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

export const Post = mongoose.model("Post", postSchema);
export const CommentSchema = commentSchema;
export const LikeSchema = likeSchema;
