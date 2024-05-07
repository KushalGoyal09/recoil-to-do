import {atom, selector} from 'recoil';

export interface job {
    id: number,
    title: string,
    description: string,
}

export const jobAtom = atom<job[]>({
    key: "jobAtom",
    default: selector<job[]>({
        key: "defaultAtomValue",
        get: () => {
            const storedJobs = localStorage.getItem('jobs');
            if(storedJobs) {
                return JSON.parse(storedJobs);
            } else {
                return [];
            }
        }
    })
});

