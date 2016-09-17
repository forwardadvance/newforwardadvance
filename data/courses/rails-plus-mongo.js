module.exports = {
  slug: 'rails-plus-mongo',
  title: 'The Informa Rails and MongoDB Course',
  description:
  `

  Rails is a Rapid Application Development framework designed to maximised programmer productivity and joy. You will be able to produce complex apps in days rather than weeks.

  MongoDB is a noSQL document store that allows you to save big data in a JSON-like object. It scales beautifully by sharding your data across multiple commodity servers, so you can hold as much data as you like. Simple queries can be made using pattern matching, and complex data manipulations can be achieved using the aggregate pipeline, where a collection is passed through a series of transformation steps, allowing you to compose arbitrarily complex result sets that may bear little resemblance to the original data set.

  This course is practical. From the start, you will be building applications and talking to live data sets.
  `,
  prerequisites: `
  This course is designed for people wishing to build apps using Rails and Mongo. The first day can be taken as a stand-alone Mongo course if so desired. A reasonable level of coding skill is assumed, but non-technical people may be able to follow along, and tackle the practical components using pair programming.
  `,
  instructor: `
  Nicholas Johnson has been a professional developer and trainer for the last 15 years and has been riding the Rails for the last 10. He has been lead developer on three large projects, and his work has been featured in the Times and the Guardian, among others. He has provided training and consultancy services to clients large and small, including recently Countrywide, Cisco, Sky, O2, JP Morgan, Ryan Air, and the University of Iceland. Nick is a hands-on practical coder, so lessons usually involve live coding and may go off piste if required. He is a prolific contributor to Stack Overflow, and has top rated answers to several canonical questions.
  `,
  information: `
  Attendees should bring their own laptops.
  `,
  duration: 4,
  courseModules: [
    require('../modules/mongo-fundamentals'),
    require('../modules/mongo-aggregation'),
    require('../modules/rb-1'),
    require('../modules/rails-1'),
    require('../modules/rb-2'),
    require('../modules/rails-2'),
    require('../modules/rb-3'),
    require('../modules/rails-3'),
  ]
};
