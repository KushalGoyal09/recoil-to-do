import { atom, selector } from 'recoil';
import { job, jobAtom } from './job';

export const searchJobs = atom<string>({
    key: "search",
    default: ""
})

export const filterJobs = selector<job[]> ({
    key: "filterInput",
    get: ({get}) => {
        const allJobs = get(jobAtom);
        const search = get(searchJobs);
        if(search === "") {
            return allJobs;
        }
        const filteredJobs: job[] = [];
        allJobs.forEach(job => {
            if(job.description.includes(search)) {
                filteredJobs.push(job);
            } else if(job.title.includes(search)) {
                filteredJobs.push(job);
            }
        });
        return filteredJobs;
    }
})