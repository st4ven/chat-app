import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) {
      return;
    }

    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const searchTerms = search.toLowerCase().split(" ");
    const conversation = conversations.find((c) => {
      const firstName = c.firstName.toLowerCase();
      const lastName = c.lastName.toLowerCase();

      if (searchTerms.length === 1) {
        return firstName.includes(searchTerms[0])
      } else if (searchTerms.length === 2) {
        return firstName.includes(searchTerms[0]) && lastName.includes(searchTerms[1]);
      }
    })

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch('');
    } else {
      toast.error("No such user found!");
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="input input-bordered rounded-full" />
        <button type="submit" className="btn btn-circle hover:bg-transparent -ml-14 bg-transparent border-none">
            <IoSearchSharp className="w-5 h-6 outline-none" />
        </button>
    </form>
  )
}

export default SearchInput