import {atom} from 'recoil';

export interface job {
    id: number,
    title: string,
    description: string,
}

export const jobAtom = atom<job[]>({
    key: "jobAtom",
    default: []
});

