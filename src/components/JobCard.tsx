import React from "react"
import { job } from "../store/atom/job"

interface JobCardProps {
  job: job;
}

const JobCard : React.FC<JobCardProps> = ({job}) => {
  return (
    <div className="border border-gray-300 p-4 rounded shadow-md">
      <div className="font-bold text-lg mb-2">{job.title}</div>
      <div className="text-gray-700">{job.description}</div>
    </div>
  )
}

export default JobCard