export interface JobFunction {
    id: number;
    name: string;
}

const getJobFunction = (): JobFunction[] => {
  return [
    {
        id: 1,
        name: 'Accounting and Finance'
    },
    {
        id: 2,
        name: 'Administration and Coordination'
    },
    {
        id: 3,
        name: 'Architecture and Engineering'
    },
    {
        id: 4,
        name: 'Arts and Sports'
    },
    {
        id: 5,
        name: 'Customer Service',
    },
    {
        id: 6,
        name: 'Education and Training'
    },
    {
        id: 7,
        name: 'General Services'
    },
    {
        id: 8,
        name: 'Health and Medical'
    },
    {
        id: 9,
        name: 'Hospitality and Tourism'
    },
    {
        id: 10,
        name: 'Human Resources'
    },
    {
        id: 11,
        name: 'IT and Software'
    },
    {
        id: 12,
        name: 'Legal'
    },
    {
        id: 13,
        name: 'Management and Consultancy'
    },
    {
        id: 14,
        name: 'Manufacturing and Production'
    },
    {
        id: 15,
        name: 'Media and Creatives'
    },
    {
        id: 16,
        name: 'Public Service and NGOs'
    },
    {
        id: 17,
        name: 'Safety and Security'
    },
    {
        id: 18,
        name: 'Sales and Marketing'
    },
    {
        id: 19,
        name: 'Sciences'
    },
    {
        id: 20,
        name: 'Skilled Trade'
    },
    {
        id: 21,
        name: 'Supply Chain'
    },
    {
        id: 22,
        name: 'Writing and Content'
    },
  ];
};

export { getJobFunction };