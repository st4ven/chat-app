import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
        <input type="text" className="input input-bordered rounded-full" />
        <button type="submit" className="btn btn-circle hover:bg-transparent -ml-14 bg-transparent border-none">
            <IoSearchSharp className="w-5 h-6 outline-none" />
        </button>
    </form>
  )
}

export default SearchInput