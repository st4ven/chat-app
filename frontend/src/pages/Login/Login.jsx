import { React, useState }from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);

  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-700">
        <h1 className="text-4xl font-bold text-center text-white mb-3">
          Steven's Chat App
        </h1>

        <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Username" className="w-full input input-bordered h-10 mt-3" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <input type="password" placeholder="Password" className="w-full input input-bordered h-10 mt-3" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Link to="/signup" className="text-xs font-extralight hover:underline hover:text-blue-500 mt-2 inline-block">
          Don't have an account? Sign up
        </Link>

        <div>
          <button className="btn btn-block text-lg btn-sm mt-2 border-none bg-blue-500 hover:bg-blue-600 text-gray-200"
            disabled={loading}>
            {loading ? <span className="loading loading-spinner"></span> : "Login"}
          </button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Login;