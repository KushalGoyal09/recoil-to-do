import { useRecoilState } from "recoil"
import { searchJobs } from "../store/atom/Filter"
import React from "react";

function SearchInput() {

  const [search,setSearch] = useRecoilState(searchJobs);
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  } 

  return (
    <div>
    <input
    value={search}
    placeholder="Search"
    onChange={handleChange}
    className="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
    />
    </div>
  )
}

export default SearchInput