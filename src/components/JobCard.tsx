import React from "react"
import { job, jobAtom } from "../store/atom/job"
import { useSetRecoilState } from "recoil";

interface JobCardProps {
  job: job;
}

const JobCard : React.FC<JobCardProps> = ({job}) => {

  const setJob = useSetRecoilState(jobAtom);

  const deleteJob = (id:number) => {
    setJob(prev => {
      const newJobs = prev.filter(job => {
        if(job.id !== id) {
          return job;
        }
      })
      return newJobs;
    })
  }

  return (
    <div className="border border-gray-300 p-4 rounded shadow-md">
      <div className="font-bold text-lg mb-2">{job.title}</div>
      <div className="text-gray-700">{job.description}</div>
      <button 
      onClick={() => deleteJob(job.id)}
      className='text-red-700'
      >Delete</button>
    </div>
  )
}

export default JobCard