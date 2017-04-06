module.exports = {
  title: '$Scope and Controllers',
  duration: 0.5,
  slug: 'ng1-2',
  price: 1100,
  description: '$Scope is a data storage object that underpins databinding in Angular. In this section we understand scope, controllers, and the magic of the digest cycle.',
  // description: 'Learn how to organise your Angular code into modules, and how to inject components as required.',
  // outcome: 'You will be able to build a simple client server app based around a public API, This will generally be a Flickr app, but your own API can be used instead.',
  exercises: [

    {
      slug: 'controllers',
      path: 'ng/controllers',
      title: 'Controllers',
      description: 'Controllers glue the scope to the template.',
      github: 'angular_controllers_demo',
      learnings: [
        'ngController',
        'Controllers for instantiating $scope',
        'Using the Controller as a data store'
      ]
    },
    {
      slug: 'scope',
      path: 'ng/scope',
      title: '$Scope and the $scope tree',
      description: '$scope is an object in which you can store your models',
      github: 'angular_scope_demo',
      learnings: [
        "Prototypical $scope inheritance",
        "Dangers and how to avoid them",
        "$rootScope"
      ]
    },
    {
      slug: 'controller-as',
      path: "ng/controller-as",
      title: 'Controller As',
      description: 'We can use the controller itself as a model store.',
      github: 'angular_controller_as_demo',
      learnings: [
        "ngController as syntax"
      ]
    },
    {
      slug: 'watch',
      path: "ng/watch",
      title: 'Watch and the $digest cycle',
      description: 'Here we delve into the workings of the digest cycle and discover the logic behind Angular data binding.',
      github: 'angular_watch_demo',
      learnings: [
        'Understanding $digest and $apply',
        'Manually creating $watchers',
        'How data binding actually works'
      ]
    },

    {
      slug: 'repeat-and-filter',
      path: "ng/repeat-and-filter",
      title: 'Repeat and Filter',
      description: 'The show-off feature of Angular. This stuff makes clients really happy.',
      github: 'angular_ngrepeat_demo',
      learnings: [
        'Creating a list',
        'Storing arrays in the controller',
        'Introducing Filters',
        'ngRepeat, ngFilter, ngOrderBy'
      ]
    },
  ],
  outline: [

  ]
};
