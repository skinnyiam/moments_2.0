import mongoose from "mongoose"

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    //we will convert it into base64 string
    selectedFile: String,
    like: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PostDetail = mongoose.model('PostDetails', postSchema)

export default PostDetail;