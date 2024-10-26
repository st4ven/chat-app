import React from 'react'

const Message = () => {
  return (
    <div className="chat chat-start break-words">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src="https://avatar.iran.liara.run/username?username=Fred+Figglehorn" alt="Chat bubble" />
            </div>
        </div>

        <div className="chat-bubble text-gray-200 bg-blue-500">
            Hi, what is up?
        </div>

        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
            12:42
        </div>
    </div>
  )
}

export default Message