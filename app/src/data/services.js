const servicesData = {
  generalFund: 969200000,
  servicesSum: 847189704,
  groups: [
    {
      name: 'Public Safety',
      url: 'public-safety',
      image: '../../src/images/icons/publicSafety.gif',
      description: "Public safety made up nearly 70% of the City's General Fund budget, providing for police, fire, EMS and municipal court services.",
      groupdId: 1,
      departments: [1, 2, 3, 4],
    },
    {
      name: 'Development',
      url: 'development',
      image: '../../src/images/icons/development.gif',
      description: 'The City’s development departments oversee the city’s planning, zoning, and permitting, and inspection services.',
      groupId: 2,
      departments: [5, 6],
    },
    {
      name: 'Community Services',
      url: 'community-services',
      image: '../../src/images/icons/services.gif',
      description: 'The departments housed under community services provide environmental health services, animal services, and family health services, and managing the City’s libraries, parks, and affordable housing programs.',
      groupdId: 3,
      departments: [7, 8, 9, 10, 11, 12],
    },
    {
      name: 'Infrastructure & Mobility',
      url: 'infra-transportation',
      image: '../../src/images/icons/infraTransport.gif',
      description: '',
      groupdId: 4,
      departments: [13, 14],
    },
  ],
  departments: [
    {
      name: 'Municipal Courts',
      description: 'Municipal court and Downtown Austin Community Court make up the judicial branch of the City of Austin local government. The court oversees cases of traffic, city ordinance, state code, and parking violations.',
      amount: 21086564,
      lastYearAmount: 21086564,
      deptId: 1,
      url: 'http://www.austintexas.gov/department/municipal-court',
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
      description: '',
      amount: 373570249,
      lastYearAmount: 373570249,
      deptId: 2,
      url: 'http://www.austintexas.gov/department/police',
      tradeoff: [
        {
          112397.25: '1 Officer full year of funding with equipment, fuel, salary, pension, etc.',
        },
      ],
    },
    {
      name: 'Fire',
      description: 'Fire is committed to creating a safer Austin through prevention and education efforts and emergency response services.   Emergency Response controls and extinguishes fires in the least possible amount of time and with the least possible loss of life.',
      amount: 175266499,
      lastYearAmount: 175266499,
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
      description: 'EMS provides emergency communication services, ground and air emergency ambulance response, standby support, and special rescue services to the community.',
      amount: 78255956,
      lastYearAmount: 78255956,
      deptId: 4,
      tradeoff: [
        {
          108174: '1 EMS Position year of funding and equipment',
        },
      ],
      metrics: [
        'Percent of potentially life-threatening calls responded to within 9 minutes and 59 seconds',
      ],
      url: 'https://austintexas.gov/department/ems',
    },
    {
      name: 'Planning & Zoning',
      description: 'The Purpose of the Planning and Zoning Department is to provide planning, preservation and design services. PAZ is responsible for long range planning, current planning (including historic preservation, annexation, and zoning), urban design services, and updates of the Land Development Code. Current Projects underway: Imagine Austin, CodeNEXT, South Center Waterfront Initiative.',
      url: 'http://www.austintexas.gov/department/planning-and-zoning',
      amount: 7505329,
      lastYearAmount: 7505329,
      deptId: 5,
    },
    {
      name: 'Development Services',
      description: 'Development services oversees the operations of the "one-stop shop". The purpose of the One Stop Shop is to consolidate the process of land development permitting and assistance into a single location.',
      amount: 32902297,
      lastYearAmount: 32902297,
      deptId: 6,
      tradeoff: [
        {
          68764: '1 FTE for land-use permit review',
        },
      ],
      metrics: [
        'Percent of building inspections performed within 24 hours of request',
      ],
      url: 'http://www.austintexas.gov/department/development-services',
    },
    {
      name: 'Animal Services',
      description: 'The purpose of the Animal Services Office is to provide an array of animal control, health, and pet-owner services to the public in order to promote responsible pet ownership and humane treatment of animals. They provide food, water, shelter and veterinary care for lost or homeless animals. They enforce animal regulations including impoundment, quarantine and other rabies control services.',
      amount: 11546362,
      lastYearAmount: 11546362,
      deptId: 7,
      tradeoff: [
        {
          900: '10 microchipped animals',
        },
      ],
      metrics: [
        '90% of a live shelter outcome goal. This refers to 90% animals that enter the shelter are adopted, transferred to rescue programs, or returned to their homes',
      ],
      url: 'http://www.austintexas.gov/department/aac',
    },
    {
      name: 'Parks & Recreation',
      description: 'Parks and Recreation department is tasked with providing, protecting, and preserving the city’s park system.',
      amount: 75432093,
      lastYearAmount: 75432093,
      deptId: 8,
      url: 'https://austintexas.gov/department/parks-and-recreation/about',
      tradeoff: [
        {
          75000: '1 FTE for maintaining safe trails and playgrounds',
        },
      ],
    },
    {
      name: 'Public Libraries',
      description: "Austin Public Libraries' mission is to provide easy access to books and information for all ages. The budget includes staffing and management of existing and planned library facilities.",
      tradeoff: [
        {
          23676.5: '1 Librarian',
        },
      ],
      metrics: [
        'Library Program attendance per capita',
      ],
      url: 'http://library.austintexas.gov/',
      amount: 41755192,
      lastYearAmount: 41755192,
      deptId: 9,
    },
    {
      name: 'Social Service Contracts',
      description: 'The Social Services Contracts program includes funding for basic needs, behavioral health, child and youth services, HIV, homelessness, community planning efforts, and workforce development. We divided social service contracts from Health and Human Services Department to highlight the role these contracts play in the budget process.',
      amount: 7793303.00,
      lastYearAmount: 7793303,
      deptId: 10,
      tradeoff: [
        {
          700000: 'Funding for rental and financial assistance programs',
        },
      ],
      metrics: [
        'Percent of households at risk of homelessness that maintain housing',
        'Number of people served through workforce development social service contracts',
        'Number of individuals served through city HIV grant agreement',
      ],
    },
    {
      name: 'Health & Human Services',
      description: 'Mission is to prevent disease, and promote and protect the health and well-being of the community by providing services such as immunizations, food, shelter, and job assistance, health screenings , and overseeing the inspection and permitting of restaurants',
      amount: 36080604,
      lastYearAmount: 36080604,
      deptId: 11,
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
      name: 'Neighborhood Housing and Community Development',
      description: 'The Neighborhood Housing & Community Development programs  include housing, small business assistance, renter assistance, and neighborhood and community revitalization.',
      amount: 4818944,
      lastYearAmount: 4818944,
      deptId: 12,
      tradeoff: [
        {
          3400: '1 child receives youth services',
        },
      ],
      metrics: [
        'Total number of services provided to beneficiaries through housing and community development',
      ],
      url: 'http://www.austintexas.gov/department/housing',
    },
    {
      name: 'Transportation Department',
      description: 'In 2008, the City of Austin established the Austin Transportation Department to address the city’s sustained transportation and mobility needs. The department administers and oversees the city’s traffic and parking management programs and transportation planning efforts.',
      amount: 852536,
      lastYearAmount: 852536,
      deptId: 13,
      tradeoff: [
        {
          138884: '1 FTE to enhance and support ATD mobility programs (Safety Improvements, Vision Zero Action Plan, and Local Area Traffic Management)',
        },
      ],
    },
    {
      name: 'Public Works',
      description: "Public Works Department is tasked with the physical construction and maintenance of the City's infrastructure. The four primary service areas are 1) street and bridge maintenance and repair; 2) Design and implementation of capital improvement projects; 3) Neighborhood connectivity activities  (i.e. the planning and construction of pedestrian amenities and the construction of bicycle facilities); 4) Implementation of the child safety program including school zone improvement projects and school zone crossing guards.",
      amount: 360943,
      lastYearAmount: 360943,
      deptId: 14,
      tradeoff: [
        {
          95712: 'Increased funding for street and bridge operations facilities and fleet management.',
        },
      ],
    },
  ],
};

export default servicesData;
