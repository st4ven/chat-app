import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({conversation, lastIdx}) => {
const { selectedConversation, setSelectedConversation } = useConversation();
const {onlineUsers} = useSocketContext();
const isOnline = onlineUsers.includes(conversation._id);

const isSelected = selectedConversation?._id === conversation._id;


  return (
    <>
        <div className={`flex gap-2 items-center hover:bg-blue-500 rounded-md p-2 py-1 cursor-pointer
                ${isSelected ? "bg-blue-500" : ""}
            `}
                onClick={() => setSelectedConversation(conversation)}
            >
            <div className={`avatar ${isOnline ? "online" : ""}`}>
                <div className="w-11 rounded-full">
                    <img src={conversation.profilePic} alt="user avatar" />
                </div>
            </div>

            <div className="flex flex-col flex-1">
                <div>
                    <p className="font-normal text-gray-200">{conversation.firstName + " " + conversation.lastName}</p>
                </div>
            </div>
        </div>

        {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  )
}

export default Conversation