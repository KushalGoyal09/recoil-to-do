import { useRecoilState, useRecoilValue } from 'recoil'
import JobInput from './components/JobInput';
import SearchInput from './components/SearchInput';
import JobCard from './components/JobCard';
import { filterJobs } from './store/atom/Filter';
import { jobAtom } from './store/atom/job';
import { useEffect } from 'react';

function App() {

  const allJobs = useRecoilValue(filterJobs);
  const [jobs,setjobs] = useRecoilState(jobAtom);

  useEffect(() => {
    console.log("Effect 1")
    console.log(jobs);
    const storedJobs = localStorage.getItem('jobs');
    console.log(storedJobs)
    if(storedJobs) {
      console.log(jobs);
      setjobs(() => JSON.parse(storedJobs))
      console.log(jobs)
    } else {
      console.log("bye")
      setjobs(() => []);
    }
    console.log(jobs)
  },[])

  useEffect(() => {
    console.log("Effect 2")
    console.log(jobs)
    if(jobs) {
      localStorage.setItem('jobs',JSON.stringify(jobs));
    }
  }, [jobs])

  return (
    <>
    <SearchInput/>
      <JobInput/>
      {allJobs.map(job => {
        return <JobCard key={job.id} job={job}/>
      })}
    </>
  )
}

export default App
