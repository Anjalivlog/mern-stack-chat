import mongoose from "mongoose";

const ConversationSchema = new mongoose.Schema({
    members: {
        type: Array
    },
    message: {
        type: String
    }
},{
    timestamps: true
})

const conversationModal = mongoose.model('conversation', ConversationSchema);

export default conversationModal;