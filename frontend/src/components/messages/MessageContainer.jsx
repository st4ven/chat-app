import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'

const MessageContainer = () => {
  const noChatSelected = false;

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {noChatSelected ? <NoChatSelected /> : (
        <>
        <div className="px-4 py-1 my-3 flex flex-row items-center gap-3">
            <div className="w-8 rounded-full">
                <img src="https://avatar.iran.liara.run/username?username=Fred+Figglehorn" alt="Chat bubble" />
            </div>
            <span className="text-gray-200 font-normal">Fred Figglehorn</span>
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
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-normal flex flex-col items-center gap-2">
        <p>Welcome John Doe! 👋</p>
        <p>Select a chat to start messaging</p>
      </div>


    </div>


  )


}