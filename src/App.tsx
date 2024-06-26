import { useRecoilValue } from 'recoil'
import JobInput from './components/JobInput';
import SearchInput from './components/SearchInput';
import JobCard from './components/JobCard';
import { filterJobs } from './store/atom/Filter';
import { jobAtom } from './store/atom/job';
import { useEffect } from 'react';

function App() {

  const allJobs = useRecoilValue(filterJobs);
  const jobs = useRecoilValue(jobAtom);

  useEffect(() => {
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
