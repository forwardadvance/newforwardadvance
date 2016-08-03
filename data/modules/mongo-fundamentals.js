module.exports = {
  title: "Mongo Fundamentals",
  duration: 0.5,
  slug: 'mongo-fundamentals',
  price: 750,
  description: "Foundations of MongoDB",
  exercises: [
    {
      slug: 'intro',
      title: "Welcome to Mongo",
      description: "In which we meet MongoDB, connect to a terminal and say hello.",
      github: ''
    },
    {
      slug: 'basic-find',
      title: "Find",
      description: "We learn how to make simple Mongo queries using pattern matching.",
      github: ''
    },
    {
      slug: 'find-with-expressions',
      title: "Finding with expressions",
      description: "Where we start to make more complex queries using expressions and comparisons.",
      github: ''
    },
    {
      slug: 'find-projection',
      title: "Formatting results with projection",
      description: "We can format the results we get back from our collection using projection.",
      github: ''
    },
    {
      slug: 'count-and-limit',
      title: "Count, Limit, Skip & Sort",
      description: "We can chain additional functions onto our find queries to modify the results.",
      github: ''
    },
    {
      slug: 'cursors',
      title: "Interacting with cursors",
      description: "Most find operations in Mongo return a cursor object which allows us to get the results.",
      github: ''
    },
    {
      slug: 'crud',
      title: "Inserting, Updating & Deleting",
      description: "CRUD is a basic function of any database. Let's do it with Mongo.",
      github: ''
    }
  ]
}
