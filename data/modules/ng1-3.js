module.exports = {
  'title': 'Karma and Unit Testing',
  duration: 0.5,
  slug: 'ng1-3',
  price: 1100,
  'description': 'Advanced use of directives and components. In this section we learn all the skills required to build a component based Single Page App (SPA)',
  'outcome': 'You will understand Unit and Integration testing, and will be able to do test driven development.',
  'exercises': [


    {
      slug: 'di',
      title: 'Services and Dependency Injection (DI)',
      description: 'Dependency Injection allows us to require components simply be referring to them. Learn about DI and also split your code into sensible modules.',
      github: 'angular_di_demo'
    },
    {
      slug: 'karma-intro',
      title: 'Intoduction to Unit Testing',
      description: 'All good developers write unit tests. This is ongoing through the rest of the course.',
      github: ''
    },
    {
      slug: 'karma-services',
      title: 'Testing a Service with Karma',
      description: 'Here we see how to use Karma to automate service tests.',
      github: 'angular_karma_service_demo'
    },
    {
      slug: 'karma',
      title: 'Testing a Controller with Karma',
      description: 'Here we see how to use Karma to automate controller tests.',
      github: 'angular_karma_demo'
    },
    // {
    //   slug: 'custom-filters',
    //   title: 'Writing Custom Filters',
    //   description: 'A filter is a function for modifying and presenting data. We learn to write and use our own.',
    //   github: 'angular_custom_filters_demo'
    // },
    // {
    //   slug: 'karma-filters',
    //   title: 'Testing a Filter with Karma',
    //   description: 'Now let\'s expand our Karma knowledge by writing a test for our filter.',
    //   github: ''
    // },
    // {
    //   slug: 'protractor',
    //   title: 'Protractor',
    //   description: 'End to end integration testing.',
    //   github: 'angular_protractor_demo'
    // },
    {
      slug: 'homework',
      title: 'Homework',
      description: 'Fun and simple homework. It\'s like school'
    },
  ],
  'outline': [
    'Further Directives',
    'Order of Compilation',
    'Link Function (low level compiler access)',
    'Compile Function',
    'Transclusion and Transclusion Scope',
    'Isolate Scope',
    'Component Based Architecture',
    'Routing, SEO and Pushstate',
    'Testing with Protractor'
  ]
};
