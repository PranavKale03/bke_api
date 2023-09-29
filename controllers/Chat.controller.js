import Community from "../models/Community.model.js";

const chatController = {
    joinCommunity: async (io, socket, communityName) => {
        socket.join(communityName)
        // Fetch chat history for the community and send it to the client
        try {
            const community = await Community.findOne({ _id: communityName });

            if (community) {
                console.log(community)
                io.to(communityName).emit('messageHistory', community.messages);
            }
        } catch (error) {
            console.error('Error fetching chat history:', error);
        }
    },

    handleMessage: async (io, message, communityName, socket) => {
        // Find the Community and add the new message to its messages array
        try {
            const community = await Community.findOne({ _id: communityName });
            if (community) {
                const newMessage = {
                    userName: message.userName,
                    userId: message.userId,
                    message: message.message,
                    timestamp: message.timestamp,
                };

                // If the 'messages' array doesn't exist, create it
                if (!community.messages) {
                    community.messages = [];
                }

                community.messages.push(newMessage);
                await community.save().then(()=>console.log("saved to backend"));

                // Emit the new message to all clients in the same community
                io.to(communityName).emit('chatMessage', newMessage);
                socket.emit('messageSavedConfirmation', "Message saved successfully");
            }
        } catch (error) {
            console.error('Error saving message:', error);
            socket.emit('messageSavedConfirmation', "Error saving the message");
        }
    },

    handleDisconnect: () => {
        console.log('Client disconnected');
    },
};

export default chatController;
