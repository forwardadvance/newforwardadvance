module.exports = {
  title: '$Scope and Code Controllers',
  duration: 0.5,
  slug: 'ng1-2',
  price: 1100,
  // description: 'Learn how to organise your Angular code into modules, and how to inject components as required.',
  // outcome: 'You will be able to build a simple client server app based around a public API, This will generally be a Flickr app, but your own API can be used instead.',
  exercises: [

    {
      slug: 'controllers',
      title: 'Controllers',
      description: 'Controllers glue the scope to the template.',
      github: 'angular_controllers_demo'
    },
    {
      slug: 'repeat-and-filter',
      title: 'Repeat and Filter',
      description: 'The show-off feature of Angular. This stuff makes clients really happy.',
      github: 'angular_ngrepeat_demo'
    },
    {
      slug: 'scope',
      title: '$Scope and the $scope tree',
      description: '$scope is an object in which you can store your models',
      github: 'angular_scope_demo'
    },
    {
      slug: 'controller-as',
      title: 'Controller As',
      description: 'We can use the controller itself as a model store.',
      github: 'angular_controller_as_demo'
    },
    {
      slug: 'watch',
      title: 'Watch and the $digest cycle',
      description: 'Here we delve into the workings of the digest cycle and discover the logic behind Angular data binding.',
      github: 'angular_watch_demo'
    },
  ],
  outline: [
    'Testing with Karma (this is ongoing through the rest of the course)',
    'Client Server Architecture (AJAX)',
    'ControllerAs',
    'REST',
    'JSONP, CORS and the same domain policy',
    'Writing modular code with services and factories',
    'Writing custom filters',
    'Beginning directives'
  ]
};
