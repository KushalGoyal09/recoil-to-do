import { useSetRecoilState } from "recoil"
import { job, jobAtom } from "../store/atom/job"
import { useState } from "react";

const JobInput = () => {

  const addJob = useSetRecoilState(jobAtom);

  const [title,setTitle] = useState<string>("");
  const [description,setDescription] = useState<string>("");

  const submit = () => {
    const newjob:job = {
      id: Date.now(),
      title: title,
      description:description
    }
    addJob(prev => [...prev,newjob])
    setTitle("");
    setDescription("");
  }

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleChangeDesc = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  return (
    <>
    <input 
    type="text" 
    value={title}
    onChange={handleChangeTitle}
    placeholder="Title"
    className="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
    />
    <input 
    type="text" 
    value={description}
    onChange={handleChangeDesc}
    placeholder="description"
    className="w-full mt-2 py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
    />
    <input
    type="button"
    onClick={submit}
    value="Add"
    className="mt-2 py-2 px-4 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
    />
    </>
  )

}

export default JobInput;