module.exports = {
  title: "Mongo Aggregation Framework",
  duration: 0.5,
  slug: 'mongo-aggregation',
  price: 750,
  description: "Welcome to the Mongo Aggregation Framework",
  exercises: [
    {
      slug: 'aggregation',
      title: 'The Mongo Aggregation Framework',
      description: 'In which we introduce the aggregation framework, and learn how to chain operations to generate more complex queries.',
      github: '',
      path: 'mongo/aggregation'
    },
    {
      slug: 'aggregation-with-match',
      title: 'Filtering the Aggregate Pipeline with $match',
      description: 'In which we introduce the aggregation framework, and learn how to chain operations to generate more complex queries.',
      github: '',
      path: 'mongo/aggregation-with-match'
    },
    {
      slug: 'aggregation-project',
      title: 'Modifying a Mongo stream with $project',
      description: 'We can modify the documents in the pipe, adding new fields and removing others.',
      github: '',
      path: 'mongo/aggregation-project'
    },
    {
      slug: 'aggregation-dynamic-project',
      title: 'Creating Dynamic Fields with $project',
      description: 'Project allows us to compose new fields based on expressions. Here we see how.',
      github: '',
      path: 'mongo/aggregation-dynamic-project'
    },
    {
      slug: 'aggregation-group',
      title: 'Grouping documents with $group',
      description: 'We can modify our pipeline by grouping documents according to criteria or expressions.',
      github: '',
      path: 'mongo/aggregation-group'
    },
    {
      slug: 'aggregation-count',
      title: 'Counting distinct fields with $project and $match',
      description: 'We can combine $project and $match to count distinct. Here we see how.',
      github: '',
      path: 'mongo/aggregation-count'
    },
    {
      slug: 'aggregation-by-date',
      title: 'Grouping Mongo Collections by Date to produce Timeline stats',
      description: 'We can use the date functions to group by date and output stats. Pipe through project and generate date for a graph.',
      github: '',
      path: 'mongo/aggregation-by-date'
    },
     //{
      //slug: '// aggregation-redact',
     //   title:'"Checking documents against themselves with $redact',
     //   description: "$redact allows us to check fields against other fields.',
     //   github: '',
     //   path: 'mongo/aggregation-redact'
    // },
    {
      slug: 'aggregation-unwind',
      title: 'Producing Complex Results by Winding and Unwinding Collections',
      description: 'We can wind up arrays with $group and $unwind them to produce useful data.',
      github: '',
      path: 'mongo/aggregation-unwind'
    },
    {
      slug: 'map-reduce',
      title: 'Introducing Map Reduce',
      description: 'We can use the date functions to group by date and output stats. Pipe through project and generate date for a graph.',
      github: '',
      path: 'mongo/map-reduce'
    }
  ]
}
