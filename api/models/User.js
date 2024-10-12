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
    posts: {
        type: [mongoose.SchemaTypes.ObjectId],
        required: true,
        default: []
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
