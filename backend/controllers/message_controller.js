import Conversation from "../models/conversation_model.js";
import Message from "../models/message_model.js";

/// Handles sending messages between two users
export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;               // get the message
        const { id: receiverId } = req.params;      // get the receiver id
        const senderId = req.user._id;              // get the sender id

        // look if a conversation between the two IDs exist
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId]},
        });

        // if not, create a conversation between the two 
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        };

        // create the message
        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        // push the new message into the conversation
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        // SOCKET IO FUNCTIONALITY HERE

        // save to database
        await Promise.all([conversation.save(), newMessage.save()]);

        // return the message as a response
        res.status(201).json(newMessage);
    } catch (error) {
        // return error message if the sendMessage failed
        console.error("Error in sendMessage controller: ", error.message);
        res.status(500).json({ error: "Interal server error" }); 
    }
}

/// Gets messages between two users
export const getMessages = async (req, res) => {
    try {
        const {id:userToChatId} = req.params;       // get the receiver id 
        const senderId = req.user._id;              // get the sender id
        
        // find a conversation between the two
        // and get the messages
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] }
        }).populate("messages");

        // if no conversation, then response will be empty
        if (!conversation) {
            return res.status(200).json([]);
        }

        // messages from the conversation
        const messages = conversation.messages;

        // return the messages as a response
        res.status(200).json(messages);
    } catch (error) {
        // return error message if the getMessages failed
        console.error("Error in getMessages controller: ", error.message);
        res.status(500).json({ error: "Interal server error" }); 
    }
}