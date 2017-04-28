const levels = [
   {
     index: 0,
     title: "Welcome",
     image: "titled_logo.svg",
     completeSections: 5,
     totalSections: 5,
     desc: "The departments housed under community services provide services including providing environmental health services, animal services, and family health services, and managing the City’s libraries, parks, and affordable housing efforts.",
     departments: [],
     status: "complete",
   },
   {
     index: 1,
     title: "Development",
     image: "development.svg",
     desc: "The departments housed under community services provide services including providing environmental health services, animal services, and family health services, and managing the City’s libraries, parks, and affordable housing efforts.",
     departments: [5, 6],
     status: "ready",
     percentChange: null,
     completeSections: 0,
   },
   {
     index: 2,
     title: "Infrastructure & Mobility",
     image: "infrastructure.svg",
     desc: "The departments housed under community services provide services including providing environmental health services, animal services, and family health services, and managing the City’s libraries, parks, and affordable housing efforts.",
     departments: [13, 14],
   },
   {
     index: 3,
     title: "Public Safety",
     image: "public_safety.svg",
     desc: "The departments housed under community services provide services including providing environmental health services, animal services, and family health services, and managing the City’s libraries, parks, and affordable housing efforts.",
     departments: [1, 2, 3, 4],
   },
   {
     index: 4,
     title: "Community Services",
     image: "community_services.svg",
     desc: "The departments housed under community services provide services including providing environmental health services, animal services, and family health services, and managing the City’s libraries, parks, and affordable housing efforts.",
     departments: [7, 8, 9, 10, 11, 12],
   },
   {
     index: 5,
     title: "Budget Submission",
     image: "envelope.svg",
     desc: "The departments housed under community services provide services including providing environmental health services, animal services, and family health services, and managing the City’s libraries, parks, and affordable housing efforts.",
     departments: [],
   },
]

export default levels;
