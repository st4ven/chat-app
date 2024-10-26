import React from 'react'

const Conversation = () => {
  return (
    <>
        <div className="flex gap-2 items-center hover:bg-blue-500 rounded-md p-2 py-1 cursor-pointer">
            <div className="avatar">
                <div className="w-11 rounded-full">
                    <img src="https://avatar.iran.liara.run/username?username=Fred+Figglehorn" alt="user avatar" />
                </div>
            </div>

            <div className="flex flex-col flex-1">
                <div>
                    <p className="font-normal text-gray-200">Fred Figglehorn</p>
                </div>
            </div>
        </div>

        <div className="divider my-0 py-0 h-1" />
    </>
  )
}

export default Conversation