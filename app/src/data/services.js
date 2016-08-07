const servicesData = {
  generalFund: 969200000,
  servicesSum: 0,
  groups: [
    {
      name: 'Public Safety',
      image: '../../src/images/icons/publicSafety.gif',
      departments: [
        {
          name: 'Municipal Courts',
          default: 100000,
          amount: 100000,
        },
        {
          name: 'Police',
          default: 100000,
          amount: 100000,
        },
        {
          name: 'Fire',
          default: 100000,
          amount: 100000,
        },
        {
          name: 'Emergency Management Services',
          default: 100000,
          amount: 100000,
        },
      ]
    },
    {
      name: 'Development',
      image: '../../src/images/icons/development.gif',
      departments: [
        {
          name: 'Planning & Zoning',
          default: 100000,
          amount: 100000,
        },
        {
          name: 'Development Services',
          default: 100000,
          amount: 100000,
        },
      ]
    },
    {
      name: 'Community Services',
      image: '../../src/images/icons/services.gif',
      departments: [
        {
          name: 'Animal Services',
          default: 100000,
          amount: 100000,
        },
        {
          name: 'Parks & Recreation',
          default: 100000,
          amount: 100000,
        },
        {
          name: 'Public Libraries',
          default: 100000,
          amount: 100000,
        },
        {
          name: 'Social Service Contracts',
          default: 100000,
          amount: 100000,
        },
        {
          name: 'Health & Human Services',
          default: 100000,
          amount: 100000,
        },
      ]
    },
    {
      name: 'Infrastructure & Transportation',
      image: '../../src/images/icons/infraTransport.gif',
      departments: [
        {
          name: 'Transportation Department',
          default: 100000,
          amount: 100000,
        },
        {
          name: 'Public Works',
          default: 100000,
          amount: 100000,
        },
      ]
    },
  ]
};

export default servicesData;
