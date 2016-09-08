module.exports = {
  title: 'Advanced Directives',
  duration: 0.5,
  slug: 'ng1-7',
  price: 750,
  description: 'Advanced use of directives and components. In this section we learn all the skills required to build a component based Single Page App (SPA)',
  outcome: 'You will have a full and deep understanding of directives and the angular compiler, and will be able to confidently build a scalable Angular app.',
  exercises: [

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

    {
      slug: 'directive-compilation',
      title: 'Directive Compilation and the link function',
      description: 'We look at how the Angular compiler traverses the DOM, order of compilation, and when to use the compile, link and controller functions.',
      github: 'angular_directive_compilation_demo',
      learnings: [
        'Order of compilation',
        'compile, pre-link and post-link'
      ]
    },
    {
      slug: 'transclusion',
      title: 'Directive Transclusion',
      description: 'Transclusion allows us to pass template content to a directive as an attribute. This is a lot more useful than it sounds. Here we see why.',
      github: 'angular_directive_transclusion_demo',
      learnings: [
        'ng-transclude',
      ]
    },
    {
      slug: 'manual-transclusion',
      title: 'Manual Transclusion in the Link Function',
      description: 'The transclusion is available your link function, enabling some advanced usage.',
      github: 'angular_directive_transclusion_demo',
      learnings: [
        'Manual transclusion against a $scope'
      ]
    },
    // {
    //   slug: 'parse',
    //   title: 'Parsing attributes against $scope',
    //   description: '',
    //   github: 'angular_parse_demo',
    //   learnings: [
    //     'Parsing an Angular expression'
    //   ]
    // },
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
