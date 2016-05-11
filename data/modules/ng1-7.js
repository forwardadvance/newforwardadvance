module.exports = {
  title: 'Advanced Directives',
  duration: 0.5,
  price: 750,
  description: 'Advanced use of directives and components. In this section we learn all the skills required to build a component based Single Page App (SPA)',
  outcome: 'You will have a full and deep understanding of directives and the angular compiler, and will be able to confidently build a scalable Angular app.',
  exercises: [

    {
      slug: 'parse',
      title: 'Parsing attributes against $scope',
      description: 'How to make our directives receive an expression.',
      github: 'angular_parse_demo'
    },
    {
      slug: 'testing-directives',
      title: 'Unit testing directives using Karma',
      description: 'Unit testing is for directives too.',
      github: 'angular_testing_directives_demo'
    },
    {
      slug: 'crud',
      title: 'Create, Read, Update, Delete',
      description: 'We put it together and talk to a real RESTful API to build a little content driven app',
      github: 'angular_crud_demo'
    },
    {
      slug: 'webapi',
      title: 'Build a back end with WebAPI (Optional, assumes familiarity with C#)',
      description: 'Build a simple API with WebAPI, then integrate from it.',
      github: 'angular_webapi_demo'
    },
    {
      slug: 'resource',
      title: 'Resource',
      description: 'Resource is an ORM for REST. Powerful and terse AJAX.',
      github: 'angular_resource_demo'
    }
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
