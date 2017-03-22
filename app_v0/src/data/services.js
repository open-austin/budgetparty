import publicSafetyImage from 'images/icons/publicSafety.gif';
import developmentImage from 'images/icons/development.gif';
import communityServicesImage from 'images/icons/services.gif';
import infraTransportImage from 'images/icons/infraTransport.gif';

const servicesData = {
  generalFund: 969200000,
  generalFund2016: 911000000,
  servicesSum: 867226871,
  initialSum: 867226871,
  groups: [
    {
      name: 'Public Safety',
      url: 'public-safety',
      image: publicSafetyImage,
      description: "Public safety made up nearly 70% of the City's General Fund budget, providing for police, fire, EMS and municipal court services.",
      groupdId: 1,
      departments: [1, 2, 3, 4],
    },
    {
      name: 'Development',
      url: 'development',
      image: developmentImage,
      description: 'The City’s development departments oversee the city’s planning, zoning, and permitting, and inspection services.',
      groupId: 2,
      departments: [5, 6],
    },
    {
      name: 'Community Services',
      url: 'community-services',
      image: communityServicesImage,
      description: 'The departments housed under community services provide environmental health services, animal services, and family health services, and managing the City’s libraries, parks, and affordable housing programs.',
      groupdId: 3,
      departments: [7, 8, 9, 10, 11, 12],
    },
    {
      name: 'Infrastructure & Mobility',
      url: 'infra-transportation',
      image: infraTransportImage,
      description: '',
      groupdId: 4,
      departments: [13, 14],
    },
  ],
  departments: [
    {
      name: 'Municipal Courts',
      description: 'Municipal court and Downtown Austin Community Court make up the judicial branch of the City of Austin local government. The court oversees cases of traffic, city ordinance, state code, and parking violations.',
      amount: 22103276,
      lastYearAmount: 22103276,
      amount2015: 21086564,
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
      description: 'Officers do everything from enforcing the law, to preventing crime, investigating crime, reaching out to the community and writing reports',
      amount: 387399375,
      lastYearAmount: 387399375,
      amount2015: 373570249,
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
      description: 'The Austin Fire Department is committed to creating safer communities through prevention, preparedness and effective emergency response.',
      amount: 185889176,
      lastYearAmount: 185889176,
      amount2015: 175266499,
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
      description: 'EMS provides emergency communication services, ground and air emergency ambulance response, standby support, and special rescue services to the community.',
      amount: 83870728,
      lastYearAmount: 83870728,
      amount2015: 78255956,
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
      description: 'The Purpose of the Planning and Zoning Department is to provide planning, preservation and design services. PAZ is responsible for long range planning, current planning (including historic preservation, annexation, and zoning), urban design services, and updates of the Land Development Code. Current Projects underway: Imagine Austin, CodeNEXT, South Center Waterfront Initiative.',
      url: 'https://data.austintexas.gov/stories/s/Planning-and-Zoning/se7h-anvc',
      amount: 8047868,
      lastYearAmount: 8047868,
      amount2015: 7505329,
      percentChange: 0,
      deptId: 5,
    },
    {
      name: 'Development Services',
      description: 'Development services oversees the operations of the "one-stop shop". The purpose of the One Stop Shop is to consolidate the process of land development permitting and assistance into a single location.',
      amount: 38405897,
      lastYearAmount: 38405897,
      amount2015: 32902297,
      percentChange: 0,
      deptId: 6,
      tradeoff: [
        {
          68764: '1 FTE for land-use permit review',
        },
      ],
      metrics: [
        'Percent of building inspections performed within 24 hours of request',
      ],
      url: 'https://data.austintexas.gov/stories/s/Development-Services/qwps-5848',
    },
    {
      name: 'Animal Services',
      description: 'The purpose of the Animal Services Office is to provide an array of animal control, health, and pet-owner services to the public in order to promote responsible pet ownership and humane treatment of animals. They provide food, water, shelter and veterinary care for lost or homeless animals. They enforce animal regulations including impoundment, quarantine and other rabies control services.',
      amount: 12946559,
      lastYearAmount: 12946559,
      amount2015: 11546362,
      percentChange: 0,
      deptId: 7,
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
      description: 'Parks and Recreation department is tasked with providing, protecting, and preserving the city’s park system.',
      amount: 80760700,
      lastYearAmount: 80760700,
      amount2015: 75432093,
      percentChange: 0,
      deptId: 8,
      url: 'https://data.austintexas.gov/stories/s/Parks-and-Recreation/wgi2-kbuk',
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
      url: 'https://data.austintexas.gov/stories/s/Austin-Public-Library/patt-h8xx',
      amount: 47877210,
      lastYearAmount: 47877210,
      amount2015: 41755192,
      percentChange: 0,
      deptId: 9,
    },
    {
      name: 'Social Service Contracts',
      description: 'The Social Services Contracts program includes funding for basic needs, behavioral health, child and youth services, HIV, homelessness, community planning efforts, and workforce development. We divided social service contracts from Health and Human Services Department to highlight the role these contracts play in the budget process.',
      amount: 27572364,
      lastYearAmount: 27572364,
      amount2015: 7793303,
      percentChange: 0,
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
      amount: 38118507,
      lastYearAmount: 38118507,
      amount2015: 36080604,
      percentChange: 0,
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
      name: 'Neighborhood Housing & Community Development',
      description: 'The Neighborhood Housing & Community Development programs  include housing, small business assistance, renter assistance, and neighborhood and community revitalization.',
      amount: 5377245,
      lastYearAmount: 5377245,
      amount2015: 4818944,
      percentChange: 0,
      deptId: 12,
      tradeoff: [
        {
          3400: '1 child receives youth services',
        },
      ],
      metrics: [
        'Total number of services provided to beneficiaries through housing and community development',
      ],
      url: 'https://data.austintexas.gov/stories/s/Neighborhood-Housing-and-Community-Development/wywe-6mv3',
    },
    {
      name: 'Transportation Department',
      description: 'In 2008, the City of Austin established the Austin Transportation Department to address the city’s sustained transportation and mobility needs. The department administers and oversees the city’s traffic and parking management programs and transportation planning efforts.',
      url: 'https://data.austintexas.gov/stories/s/Austin-Transportation/7sy3-ec3s',
      amount: 852536,
      lastYearAmount: 852536,
      amount2015: 852536,
      percentChange: 0,
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
      url: 'https://data.austintexas.gov/stories/s/Public-Works/7vsj-iwwq',
      amount: 1,
      lastYearAmount: 1,
      amount2015: 360943,
      percentChange: 0,
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
