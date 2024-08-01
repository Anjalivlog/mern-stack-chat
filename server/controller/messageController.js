import conversationModal from "../models/conversationModal.js";
import messageModal from "../models/messageModal.js";

export const newMessage = async (request, response) => {
    try {
        const newMessage = new messageModal(request.body);
        await newMessage.save();
        await conversationModal.findByIdAndUpdate(request.body.conversationId, { message: request.body.text });
        return response.status(200).json('Message has bheen sent successfully');
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const getMessages = async (request, response) => {
    try {
        const messages = await messageModal.find({ conversationId: request.params.id });
        return response.status(200).json(messages);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}