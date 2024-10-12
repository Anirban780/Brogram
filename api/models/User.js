import mongoose from "mongoose";

const userSchema = new  mongoose.Schema({
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
    followers: {
        type: [mongoose.SchemaTypes.ObjectId],
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
        type: [mongoose.SchemaTypes.ObjectId],
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

export default mongoose.model("User", userSchema);
