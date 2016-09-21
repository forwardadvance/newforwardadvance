module.exports = {
  title: 'Mongo Fundamentals',
  duration: 0.5,
  slug: 'mongo-fundamentals',
  price: 750,
  description: 'Foundations of MongoDB',
  exercises: [
    {
      slug: 'intro',
      title: 'Welcome to Mongo',
      description: 'In which we meet MongoDB, connect to a terminal and say hello.',
      github: '',
      path: 'mongo/intro'
    },
    {
      slug: 'basic-find',
      title: 'Finding documents',
      description: 'We learn how to make simple Mongo queries using pattern matching.',
      github: '',
      path: 'mongo/basic-find'
    },
    {
      slug: 'find-with-expressions',
      title: 'Finding with Expressions and comparison queries',
      description: 'Where we start to make more complex queries using expressions and comparisons.',
      github: '',
      path: 'mongo/find-with-expressions'
    },
    {
      slug: 'find-projection',
      title: 'Formatting results with projection',
      description: 'Mongo lets us build an API. Here we learn how to format our output.',
      github: '',
      path: 'mongo/find-projection'
    },
    {
      slug: 'count-and-limit',
      title: 'Count, Limit, Skip & Sort',
      description: 'We can chain additional functions onto our find queries to modify the results.',
      github: '',
      path: 'mongo/count-and-limit'
    },
    {
      slug: 'cursors',
      title: 'Interacting with cursors',
      description: 'Most find operations in Mongo return a cursor object which allows us to get the results.',
      github: '',
      path: 'mongo/cursors'
    },
    {
      slug: 'crud',
      title: 'Inserting, Updating & Deleting - CRUD',
      description: 'CRUD is a basic function of any database. Let\'s do it with Mongo.',
      github: '',
      path: 'mongo/crud'
    },
    {
      slug: 'rails-integration',
      title: 'Rails Integration with Mongoid (optional)',
      description: 'Learn to use Mongoid, the official Mongo Ruby gem',
      github: '',
      path: 'mongo/rails-integration'
    }
  ]
};
