import React from 'react'

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-700">
          <h1 className="text-4xl font-bold text-center text-white mb-3">
            Create Account
          </h1>

          <form>
            <div className="flex flex-row gap-5">
              <input type="text" placeholder="First name" className="w-full input input-bordered h-10 mt-3 focus:ring-1 focus:ring-sky-500" />
              <input type="text" placeholder="Last name" className="w-full input input-bordered h-10 mt-3 focus:ring-1 focus:ring-sky-500" />
            </div>

            <div>
              <input type="text" placeholder="Username" className="w-full input input-bordered h-10 mt-3 focus:ring-1 focus:ring-sky-500" />
            </div>
            <div>
              <input type="text" placeholder="Email" className="w-full input input-bordered h-10 mt-3 focus:ring-1 focus:ring-sky-500" />
            </div>

            <div>
              <input type="password" placeholder="Password" className="w-full input input-bordered h-10 mt-3 focus:ring-1 focus:ring-sky-500" />
            </div>

            <a href="#" className="text-xs font-extralight hover:underline hover:text-sky-500 mt-2 inline-block">
              Already have an account? Log in
            </a>

            <div>
              <button className="btn btn-block text-lg btn-sm mt-2 border-none bg-sky-500 hover:bg-sky-600 text-gray-200">Sign Up</button>
            </div>
          </form>
      </div>
    </div>
  )
}

export default Signup;