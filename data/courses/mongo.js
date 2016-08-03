module.exports = {
  slug: 'mongo',
  title: 'The MongoDB Course',
  description:
  `
  MongoDB is a noSQL document store that allows you to save big data in a JSON like object. It scales beautifully by sharding your data across multiple commodity servers, so you can hold as much data as you like. Simple queries can be made using pattern matching, and complex data manipulations can be achieved using the aggregate pipeline, where a collection is passed through a series of transformation steps, allowing you to compose arbitrarily complex result sets that may bear little resemblance to the original data set.

  This course is practical. You will be using ongo, and issueing queries against real data sets, such as the US postcode database and the human genome. We start with the fundamentals and move up through the aggregate pipeline and map-reduce. We will discuss the types of problems that Mongo is appropriate for.
  `,
  prerequisites: `
  This course is designed for people wishing to use MongoDB in their apps. It is suitable for software developers and DBAs. Non-technical people may attend, but may find the practical aspects of the course more difficult.
  `,
  instructor: `
  Nicholas Johnson has been a professional developer and trainer for the last 15 years. He has used Mongo in several major projects,cand has worked with major clients such as Countrywide, Cisco, Sky, O2, JP Morgan and Ryan Air. Nick is a hands-on practical coder, so lessons usually involve live coding and may go off piste if required. He is a prolific contributor to Stack Overflow, and has top rated answers to several canonical questions.
  `,
  information: `
  Attendees should bring their own laptops.
  `,
  duration: 2,
  courseModules: [
    require('../modules/mongo-fundamentals'),
    require('../modules/mongo-aggregation'),
  ]
};

// module.exports = {
//   "title": "MongoDB",
//   "duration": 1,
//   "price": 1500,
//   "description": "MongoDB is a blazingly fast, JavaScript based datastore, suitable for storing very large amounts of semi-structured data. In this module we introduce Mongo introduce Mongo with some simple queries and gradually work up until we can generate complex, arbitrary JSON resonses from very large data sets.",
//   "exercises": {},
//   "outcome": "You will be able to write to and query a Mongo database using find, the Aggregate Framework & Map Reduce",
//   "outline": [
//     "Mongo vs. SQL, when to use each",
//     "Denormalising data",
//     "Schema design",
//     "Find",
//     "Projection",
//     "Count",
//     "Limit",
//     "Skip",
//     "Sort",
//     "Cursors",
//     "CRUD operations",
//     "The Aggregate Framework",
//     "Projection with Aggregation",
//     "Grouping",
//     "Grouping by invented fields",
//     "Unwinding",
//     "Map reduce"
//   ]
// }
