import conversationModal from "../models/conversationModal.js";

export const newConversation = async (request, response) => {
    try {
        const senderId = request.body.senderId;
        const receiverId = request.body.receiverId;

        const exist = await conversationModal.findOne({ members: { $all: [receiverId, senderId] } });

        if (exist) {
            return response.status(200).json('conversation already exist');
        }

        const newConversation = new conversationModal({
            members: [senderId, receiverId]
        });

        await newConversation.save();
        return response.status(200).json('conversation saved sucessfully');
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const getConversation = async (request, response) => {

    const senderId = request.body.senderId;
    const receiverId = request.body.receiverId;
    console.log(senderId, receiverId);

    try {
        const conversation = await conversationModal.findOne({ members: { $all: [receiverId, senderId] } });
        console.log("conversation mai", conversation);
        return response.status(200).json(conversation);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}