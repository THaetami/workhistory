// Define the interface for the data structure
export interface WorkData {
    id: number;
    title: string;
    company: string;
    started: string;
    ended: string | null;
    description?: string | null;
}

// Function to get data
const getData = (): WorkData[] => {
  return [
    {
        id: 1571875200000,
        title: 'Director',
        company: 'PT Indah Madani Hihihi',
        started: 'Aug 2019',
        ended: '',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae culpa labore eaque quo pariatur est sint, minima consequuntur consectetur laborum mollitia ad rerum necessitatibus quia deleniti optio asperiores perspiciatis aspernatur.',
    },
    {
        id: 1595664000000,
        title: 'Founder',
        company: 'PT Mencari Cinta Sejati',
        started: 'Sep 2017',
        ended: 'Nov 2018',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae culpa labore eaque quo pariatur est sint, minima consequuntur consectetur .`
    },
  ];
};

export { getData };
