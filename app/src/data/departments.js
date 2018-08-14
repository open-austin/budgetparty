const departments = [
  {
    name: 'Municipal Courts',
    description: 'The judicial branch of the City of Austin',
    learnMore:
      'The mission of the Municipal Courts is to provide fair, efficient, and accountable service to the public by impartially administering justice so that the quality of life is enhanced.\n\n  Municipal court and Downtown Austin Community Court make up the judicial branch of the City of Austin local government. The court oversees cases of traffic, city ordinance, state code, and parking violations.',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 27576596, // City Manager Proposed Budget
    amount2018: 27576596,
    amount2017: 22514014,
    amount2016: 22514014,
    percentChange: 0,
    deptId: 1,
    url: 'https://data.austintexas.gov/stories/s/Municipal-Court/xm6x-8vij',
    metrics: [
      'Number of cases magistrated',
      'Percent of offenders who complete rehabilitative recommendations',
    ],
    tradeoff: [
      {
        72907: '1 Case Management FTE',
      },
    ],
  },
  {
    name: 'Police',
    description: 'Law enforcement and crime prevention',
    learnMore:
      'The mission of the Police Department is to keep you, your family and our community safe.\n\n Officers do everything from enforcing the law, to preventing crime, investigating crime, reaching out to the community and writing reports',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 415749070,
    amount2018: 415749070,
    amount2017: 386573423,
    amount2016: 373570249,
    percentChange: 0,
    deptId: 2,
    url: 'https://data.austintexas.gov/stories/s/Police/v4d4-74jw',
    tradeoff: [
      {
        112397.25: '1 Officer full year of funding with equipment, fuel, salary, pension, etc.',
      },
    ],
  },
  {
    name: 'Fire',
    description: 'Fire prevention and emergency response',
    learnMore:
      'The Austin Fire Department is committed to creating safer communities through prevention, preparedness and effective emergency response.\n\n ',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 198478600,
    amount2018: 198478600,
    amount2016: 175266499,
    amount2017: 189013831,
    percentChange: 0,
    deptId: 3,
    url: 'http://www.austintexas.gov/department/fire',
    tradeoff: [
      {
        132829: '1 Lieutenant',
      },
    ],
    metrics: [
      'Percent of structure fires confined to room of origin',
      'Percent of emergency incidents where the amount of time between call receipt and the arrival of AFD unit is 8 minutes or less',
    ],
  },
  {
    name: 'Emergency Management Services',
    description: 'Emergency systems, communication, and response',
    learnMore:
      'The mission of Austin-Travis County EMS is to positively impact and change the lives of the people we serve through the personal commitment of each of our members to provide great patient and customer care, pursue excellence in everything we do, and show compassion to others every day.\n\n EMS provides emergency communication services, ground and air emergency ambulance response, standby support, and special rescue services to the community.',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 88336542,
    amount2018: 88336542,
    amount2017: 83786011,
    amount2016: 78255956,
    percentChange: 0,
    deptId: 4,
    tradeoff: [
      {
        108174: '1 EMS Position year of funding and equipment',
      },
    ],
    metrics: [
      'Percent of potentially life-threatening calls responded to within 9 minutes and 59 seconds',
    ],
    url: 'https://data.austintexas.gov/stories/s/Emergency-Medical-Services/nq44-vyqb',
  },
  {
    name: 'Planning & Zoning',
    description: 'Planning, preservation and design services',
    learnMore:
      'The purpose of the Planning and Zoning Department is to provide planning and zoning, preservation, and design services to make Austin the most livable city in the country\n\n Planning & Zoning is responsible for long range planning, current planning (including historic preservation, annexation, and zoning), urban design services, and updates of the Land Development Code.\n\n Current Projects underway include: Imagine Austin, CodeNEXT, South Center Waterfront Initiative.',
    url: 'https://data.austintexas.gov/stories/s/Planning-and-Zoning/se7h-anvc',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 9043645,
    amount2018: 9043645,
    amount2017: 7642545,
    amount2016: 7505329,
    percentChange: 0,
    deptId: 5,
  },
  {
    name: 'Animal Services',
    description: 'Pet services, animal regulation, and shelter',
    learnMore:
      'The mission of the Austin Animal Services Department is to prevent animal homelessness and promote humane, compassionate treatment of animals by enforcing regulations, providing a safety net for lost or homeless animals, and achieving live outcomes for at least 90% of sheltered pets.\n\n  The departments provides an array of animal control, health, and pet-owner services to the public. They provide food, water, shelter and veterinary care for lost or homeless animals. They enforce animal regulations including impoundment, quarantine and other rabies control services.',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 13911617,
    amount2018: 13911617,
    amount2017: 12914285,
    amount2016: 11546362,
    percentChange: 0,
    deptId: 6,
    tradeoff: [
      {
        900: '10 microchipped animals',
      },
    ],
    metrics: [
      '90% of a live shelter outcome goal. This refers to 90% animals that enter the shelter are adopted, transferred to rescue programs, or returned to their homes',
    ],
    url: 'https://data.austintexas.gov/stories/s/Animal-Services/qqkn-erv5',
  },
  {
    name: 'Parks & Recreation',
    description: 'Providing, protecting, and preserving the city’s park system.',
    learnMore:
      'The mission of the Parks and Recreation Department is to provide, protect, and preserve a premier park system that promotes quality recreational, cultural, and outdoor experiences for Austins citizens and visitors.\n\n  Parks and Recreation department is tasked with providing, protecting, and preserving the city’s park system',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 91862883,
    amount2018: 91862883,
    amount2017: 80504938,
    amount2016: 75432093,
    percentChange: 0,
    deptId: 7,
    url: 'https://data.austintexas.gov/stories/s/Parks-and-Recreation/wgi2-kbuk',
    tradeoff: [
      {
        75000: '1 FTE for maintaining safe trails and playgrounds',
      },
    ],
  },
  {
    name: 'Public Libraries',
    description: 'Provide easy access to books and information for all ages',
    learnMore:
      'The mission of the Austin Public Library is to provide easy access to books and information for all ages, through responsive professionals, engaging programs, and state of the art technology in a safe and friendly environment.\n\n The budget includes staffing and management of existing and planned library facilities.',
    tradeoff: [
      {
        23676.5: '1 Librarian',
      },
    ],
    metrics: ['Library Program attendance per capita'],
    url: 'https://data.austintexas.gov/stories/s/Austin-Public-Library/patt-h8xx',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 52168472,
    amount2018: 52168472,
    amount2017: 47167036,
    amount2016: 41755192,
    percentChange: 0,
    deptId: 8,
  },
  {
    name: 'Public Health',
    description: 'Disease prevention, promoting and protecting community health',
    learnMore:
      'Mission is to prevent disease, and promote and protect the health and well-being of the community by providing services such as immunizations, food, shelter, and job assistance, health screenings, and overseeing the inspection and permitting of restaurants',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 43631494,
    amount2018: 43631494,
    amount2017: 70260911,
    amount2016: 61282968,
    percentChange: 0,
    deptId: 9,
    tradeoff: [
      {
        4600: 'Shot for tots for 10 individuals',
      },
    ],
    metrics: [
      'Number of client visits at the Shots for Tots clinics for vaccines for children ages 0-18',
    ],
    url: 'http://www.austintexas.gov/department/health/about',
  },
  {
    name: 'Neighborhood Housing & Community Development',
    description: 'Housing, small business assistance, renter assistance, and more',
    learnMore:
      'The purpose of the Neighborhood Housing and Community Development Department is to provide housing, community and small business development services to benefit eligible residents so they can have access to livable neighborhoods and can increase their opportunities for self-sufficiency.\n\n The Neighborhood Housing & Community Development programs  include housing, small business assistance, renter assistance, and neighborhood and community revitalization.',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 7748100,
    amount2018: 7748100,
    amount2017: 5798181,
    amount2016: 4818944,
    percentChange: 0,
    deptId: 10,
    tradeoff: [
      {
        3400: '1 child receives youth services',
      },
    ],
    metrics: [
      'Total number of services provided to beneficiaries through housing and community development',
    ],
    url:
      'https://data.austintexas.gov/stories/s/Neighborhood-Housing-and-Community-Development/wywe-6mv3',
  },
  {
    name: 'Social Service Contracts',
    description:
      'Programs with partner agencies and non-profits addressing children & youth, homelessness, behavioral health, workforce development, community planning, and HIV prevention.',
    learnMore:
      'Social Service contracts represent agreements for program funding for partner agencies and non-profits addressing children & youth, homelessness, behavioral health, workforce development, community planning, and HIV prevention. ',
    learnMoreUrl:
      'http://budget.austintexas.gov/#!/year/2017/operating/0/fund_nm/General+Fund/0/dept_nm/Austin+Public+Health/0/div_nm/Social+Services+Contracts/0/gp_nm/Basic+Needs/0/unit_nm/Basic+Needs+Contracts/0/obj_cat?vis=barChart',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 35694422,
    amount2018: 35694422,
    percentChange: 0,
    deptId: 11,
  },
  {
    name: 'Human Resources',
    description: 'Trainings and Tuition Reimbursements for City staff professional development',
    learnMore: 'Learn more about Human Resources training: ',
    learnMoreUrl:
      'http://budget.austintexas.gov/#!/year/2017/operating/0/fund_nm/General+Fund/0/dept_nm/Human+Resources/0/div_nm/Division+placeholder/0/gp_nm/Group+placeholder/0/unit_nm/Tuition+Reimbursement/0/obj_cat/Contractuals/0/obj_cat?vis=barChart',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 465000,
    amount2018: 465000,
    amount2017: 465000,
    amount2016: 465000,
    percentChange: 0,
    deptId: 12,
    url:
      'https://data.austintexas.gov/stories/s/Neighborhood-Housing-and-Community-Development/wywe-6mv3',
  },
  {
    name: 'Interfund Transfers',
    description:
      'Transfers from general fund departments to other funds like Economic Incentives, Economic Development, Housing Trust Fund and more',
    learnMore: 'Learn more about Interfund Transfers: ',
    learnMoreUrl:
      'http://budget.austintexas.gov/#!/year/2017/operating/0/fund_nm/General+Fund/0/dept_nm/Non-Departmental/0/div_nm/Transfers+and+Other+Requirements/0/gp_nm/Transfers/0/unit_nm/Interfund+Transfers-Other/0/obj_cat/Transfers/0/obj_cat?vis=barChart',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 7836108,
    amount2018: 7836108,
    amount2017: 23744893,
    amount2016: 23744893,
    percentChange: 0,
    deptId: 13,
  },
  {
    name: 'Interdepartmental Charges',
    description:
      'Transfers are payments from general fund departments to non-general fund departments for services provided.  Examples include: the 311 call center, IT support, and utility billing support.',
    learnMore: 'Learn more about Interdepartmental Charges',
    learnMoreUrl:
      'http://budget.austintexas.gov/#!/year/2017/operating/0/fund_nm/General+Fund/0/dept_nm/Non-Departmental/0/div_nm/Transfers+and+Other+Requirements/0/gp_nm/Other+Requirements/0/unit_nm/Other+Requirements/0/obj_cat/Contractuals/0/obj_cat?vis=barChart',
    amount: null,
    explainYourSpending: null,
    lastYearAmount: 35227574,
    amount2018: 35227574,
    percentChange: 0,
    deptId: 14,
  },
];

export default departments;
