import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const Signup = () => {
  const [inputs, setInputs] = useState({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: ''
    })

  const {loading, signup} = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-700">
          <h1 className="text-4xl font-bold text-center text-white mb-3">
            Create Account
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-row gap-5">
              <input type="text" placeholder="First name" className="w-full input input-bordered h-10 mt-3" 
                  value={inputs.firstName} onChange={(e) => setInputs({...inputs, firstName: e.target.value})}
              />
              <input type="text" placeholder="Last name" className="w-full input input-bordered h-10 mt-3" 
                  value={inputs.lastName} onChange={(e) => setInputs({...inputs, lastName: e.target.value})}
              />
            </div>

            <div>
              <input type="text" placeholder="Username" className="w-full input input-bordered h-10 mt-3" 
                value={inputs.username} onChange={(e) => setInputs({...inputs, username: e.target.value})}
              />
            </div>
            <div>
              <input type="text" placeholder="Email" className="w-full input input-bordered h-10 mt-3" 
                value={inputs.email} onChange={(e) => setInputs({...inputs, email: e.target.value})}
              />
            </div>

            <div>
              <input type="password" placeholder="Password" className="w-full input input-bordered h-10 mt-3" 
                value={inputs.password} onChange={(e) => setInputs({...inputs, password: e.target.value})}
              />
            </div>

            <Link to="/login" className="text-xs font-extralight hover:underline hover:text-blue-500 mt-2 inline-block">
              Already have an account? Log in
            </Link>

            <div>
              <button className="btn btn-block text-lg btn-sm mt-2 border-none bg-blue-500 hover:bg-blue-600 text-gray-200" 
                disabled={loading}>
                {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
              </button>
            </div>
          </form>
      </div>
    </div>
  )
}

export default Signup;