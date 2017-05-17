const services = [
   {
     index: 0,
     title: "Welcome",
     image: "titled_logo.svg",
     status: "complete",
   },
   {
     index: 1,
     title: "Development",
     image: "development.svg",
     desc: "The City of Austin provides a mix of services to foster economic vibrancy, ensure the quality of new development and preserve of our natural resources.",
     departments: [5, 6],
     status: "ready",
     percentChange: null,
     completeSections: 0,
   },
   {
     index: 2,
     title: "Infrastructure & Mobility",
     image: "infrastructure.svg",
     desc: "This service group includes the Public Works Department, Austin Transportation Department, and Watershed Protection.",
     departments: [13, 14],
   },
   {
     index: 3,
     title: "Public Safety",
     image: "public_safety.svg",
     desc: "The community's safety and security is a top priority for City of Austin leaders. Public safety made up nearly 70% of the City's general fund budget, providing for police, fire, EMS and municipal court services",
     departments: [1, 2, 3, 4],
   },
   {
     index: 4,
     title: "Community Services",
     image: "community_services.svg",
     desc: "The city of Austin is committed to promoting healthy, livable, communities with access to housing and libraries.  In FY 2015-16, Austin budgeted $194.3 million to the Health and Human Services Department, the Austin Public Library, the Animal Services Department, the Parks and Recreation Department, the Code Department, and the Neighborhood Housing and Community Development Department.",
     departments: [7, 8, 9, 10, 11, 12],
   },
   {
     index: 5,
     title: "Budget Submission",
     image: "envelope.svg",
     departments: [],
   },
]

export default services;
