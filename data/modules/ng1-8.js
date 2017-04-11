module.exports = {
  title: 'End to End Protractor Testing and Angular2',
  duration: 0.5,
  slug: 'ng1-8',
  price: 750,
  description: 'Learn how to black box test a running app, even a live app on a server. Learn how Angular 2 will affect you.',
  outcome: '',
  exercises: [

    // {
    //   slug: 'testing-directives',
    //   title: 'Unit testing directives using Karma',
    //   description: 'Unit testing is for directives too.',
    //   github: 'angular_testing_directives_demo'
    // },
    // {
    //   slug: 'crud',
    //   title: 'Create, Read, Update, Delete',
    //   description: 'We put it together and talk to a real RESTful API to build a little content driven app',
    //   github: 'angular_crud_demo'
    // },
    // {
    //   slug: 'webapi',
    //   title: 'Build a back end with WebAPI (Optional, assumes familiarity with C#)',
    //   description: 'Build a simple API with WebAPI, then integrate from it.',
    //   github: 'angular_webapi_demo'
    // },
    {
      slug: 'resource',
      path: 'ng/resource',
      title: 'Resource',
      description: 'Resource is an ORM for REST. Powerful and terse AJAX.',
      github: 'angular_resource_demo'
    },
    {
      slug: 'protractor',
      path: 'ng/protractor',
      title: 'Protractor',
      description: 'End to end integration testing.',
      github: 'angular_protractor_demo',
      learnings: [
        'Black box testing on a server'
      ]
    },
    // TODO: Not written.
    // {
    //   slug: 'next-steps',
    //   title: 'Next Steps',
    //   description: 'Resource is an ORM for REST. Powerful and terse AJAX.',
    //   github: 'angular_resource_demo',
    //   learnings: [
    //     'Thinking in Components',
    //     'Prepping for Angular 2'
    //   ]
    // },
    {
      slug: 'homework',
      title: 'Homework',
      description: 'Fun and simple homework. It\'s like school'
    },
  ],
  outline: [
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
