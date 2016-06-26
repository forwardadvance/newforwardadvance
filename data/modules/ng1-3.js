module.exports = {
  'title': 'Karma, Jasmine and Unit Testing',
  duration: 0.5,
  slug: 'ng1-3',
  price: 1100,
  // 'description': 'Advanced use of directives and components. In this section we learn all the skills required to build a component based Single Page App (SPA)',
  'outcome': 'You will understand Unit and Integration testing, and will be able to do test driven development.',
  'exercises': [


    {
      slug: 'di-and-services',
      title: 'Services and Dependency Injection (DI)',
      description: 'Dependency Injection allows us to require components simply be referring to them. Learn about DI and also split your code into sensible modules.',
      github: 'angular_di_demo',
      learnings: [
        'Dependency Injection (DI)',
        'Services, Factories, Values and Constants'
      ]
    },
    {
      slug: 'karma-intro',
      title: 'Introduction to Unit Testing',
      description: 'All good developers write unit tests. This is ongoing through the rest of the course.',
      github: 'angular_karma_intro_demo',
      learnings: [
        'Reasons for writing unit tests',
        'Karma & Jasmine',
        'Jasmine Syntax'
      ]
    },
    // {
    //   slug: 'karma-cli',
    //   title: 'Karma CLI - testing on the command line',
    //   description: 'Tests are only useful when they run all the time. The Karma CLI is a background test runner that will execute all tests on save.',
    //   github: 'angular_karma_cli_demo'
    // },
    {
      slug: 'karma-services',
      title: 'Testing a Service with Karma',
      description: 'Here we see how to use Karma to automate service tests.',
      github: 'angular_karma_service_demo',
      learnings: []
    },
    {
      slug: 'karma-controllers',
      title: 'Testing a Controller with Karma',
      description: 'Here we see how to use Karma to automate controller tests.',
      github: 'angular_karma_controller_demo',
      learnings: []
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
