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
    // {
    //   slug: 'intro',
    //   title: 'Introducing Angular - Theory and Architecture',
    //   description: 'Here we learn, at a high level, what angular is, how it works, and how we should think about it.',
    //   learnings: [
    //     'How Angular compiles an app',
    //     'Angular is template driven',
    //     'Directives and components',
    //     'How Angular supports testing'
    //   ]
    // },
    {
      slug: 'hello-world',
      title: 'Hello Angular',
      description: 'We build a Hello World app and learn about templates, expressions and filters.',
      github: 'angular_templates_demo',
      learnings: [
        'ng-app',
        'curly bindings',
        'template expressions'
      ]
    },
    {
      slug: 'binding',
      title: 'Data Binding',
      description: 'We discover the spooky magic that is Angular data binding (of course it\'s not magic really, as we shall very soon see).',
      github: 'angular_binding_demo',
      learnings: [
        'ng-model',
        'ng-bind'
      ]
    },
    {
      slug: 'more-binding',
      title: 'Class, attribute and conditional binding',
      description: 'In which we bind expressions to classes and attributes and add conditional logic to our templates.',
      github: 'angular_further_binding_demo',
      learnings: [
        'binding attributes',
        'ng-class',
        'ng-show / ng-hide',
        'ng-if and $scope issues'
      ]
    },
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
