import React from 'react'
import { BiLogOut } from 'react-icons/bi';
import useLogout from '../../hooks/useLogout';
import { useAuthContext } from '../../context/AuthContext';

const LogoutButton = () => {
  const { authUser } = useAuthContext();
  const { loading, logout } = useLogout();
  return (
    <>
      <div className="divider mt-5"></div>
    <div className="mt-auto mb-3 gap-10 flex items-center">
      {!loading ? (
        <BiLogOut className="w-6 h-6 cursor-pointer" onClick={logout} />
      ) : (
        <span className="loading loading-spinner"></span>
      )}

      <div className="flex items-center gap-3">
        <div className="w-7 rounded-full">
                <img src={authUser.profilePic} alt="Chat bubble" />
            </div>

        <div className="font-normal text-gray-200">{authUser.firstName + " " + authUser.lastName}</div>
      </div>
    </div>
    </>
  )
}

export default LogoutButton