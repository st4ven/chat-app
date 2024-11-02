import { React, useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import useConversation from '../../zustand/useConversation'
import { useAuthContext } from '../../context/AuthContext'

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {

    // cleanup function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation])
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? <NoChatSelected /> : (
        <>
        <div className="px-4 py-1 my-3 flex flex-row items-center gap-3">
            <div className="w-8 rounded-full">
                <img src={selectedConversation.profilePic} alt="Chat bubble" />
            </div>
            <span className="text-gray-200 font-normal">{selectedConversation.firstName + " " + selectedConversation.lastName}</span>
        </div>
        <div className="divider my-0 mb-2 py-0 h-1" />
        <Messages />
        <MessageInput />
        </>
      )}
    </div>
  )
}

export default MessageContainer;

const NoChatSelected = () => {
  const {authUser} = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-medium flex flex-col items-center gap-2">
        <p>Welcome {authUser.firstName + " " + authUser.lastName}! 👋</p>
        <p>Select a chat to start messaging</p>
      </div>


    </div>


  )


}