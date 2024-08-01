import userModal from "../models/userModal.js"


export const addUserController = async (request, response) => {
    try {
        let exist = await userModal.findOne({ sub: request.body.sub });

        if (exist) {
            return response.status(200).json({ message: 'user already exist' });
        }

        const newUser = new userModal(request.body);
        await newUser.save();
        return response.status(200).json(newUser);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const getUsers = async (request, response) => {
    try {
        const users = await userModal.find({});
        return response.status(200).json(users);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

