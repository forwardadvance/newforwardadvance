module.exports = {
  title: 'Angular Templates and Controllers',
  duration: 0.5,
  slug: 'ng1-1',
  price: 1100,
  description: `
  Angular 1 places the template firmly in the driving seat. Your template controls you app in a way that you might not be used to.
  This module will teach you how to use templates in your Angular application.
  `,
  outcome: 'You will be able to create simple data driven forms and lists.',
  exercises:[
    // TODO: Reinstate Angular Intro
    // require('../exercises/ng/intro'),
    require('../exercises/ng/hello-world'),
    require('../exercises/ng/binding'),
    require('../exercises/ng/more-binding')
  ],
  'outline': [
    'Hello World',
    'Templates',
    'Controllers',
    'Scope',
    'Controllers',
    'Prototypical $scope inheritance',
    'Managing $scope inheritance with objects and controllerAs',
    'Watchers',
    'Dependency injection (DI)',
    'Minification safe DI',
    'Modules',
    'The $digest',
    'Using IIFEs to write better code.'
  ]
};
