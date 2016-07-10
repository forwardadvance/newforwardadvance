module.exports = {
  title: 'Components and Code Organisation',
  duration: 0.5,
  slug: 'ng1-5',
  price: 750,
  description: 'Components bundle templates and controllers together.',
  exercises: [
    {
      slug: 'directives',
      title: 'Writing Directives and Components',
      description: 'Directives tell the Angular compiler how to transform the DOM. They are the guts of Angular. You will learn all about them.',
      github: 'angular_directives_demo',
      learnings: []
    },
    {
      slug: 'isolate-scope',
      title: 'Isolate Scopes',
      description: 'One of the most misunderstood features of directives. We learn, in detail, how to control the scope hierarchy.',
      github: 'angular_directive_isolate_scopes_demo',
      learnings: [
        'Passing Expressions (@)',
        'Two way binding (=)',
        'Handling Events (&)'
      ]
    },
    {
      slug: 'modules',
      title: 'Angular Modules.',
      description: 'Angular comes with it\'s own Module system.',
      github: 'angular_modules_demo',
      learnings: [
        'Creating Modules',
        'Using 3rd party modules'
      ]
    },
    {
      slug: 'browserify',
      title: 'Breaking code into files with Browserify (optional)',
      description: 'Putting code all in one file in not cool. Let\'s fix that problem',
      github: 'angular_browserify_demo',
      learnings: [
        'NodeJS',
        'Package Manifest',
      ]
    },
    // {
    //   slug: 'webpack',
    //   title: 'Using Webpack for Modularity (optional)',
    //   description: 'Automatically build your code and run your tests, all with one script.',
    //   github: 'angular_webpack_demo',
    //   learnings: [
    //     'Jasmine Testing with Webpack',
    //     'Compiling ES7',
    //     'Brief look at TypeScript',
    //   ]
    // },
    // {
    //   slug: 'homework-2',
    //   title: 'Homework 2',
    //   description: 'Again, like school, but better paid.'
    // },
  ],
  outline: [
    'Components',
    'Component Oriented Architecture',
    'Modules with RequireJS',
    'Getting ready for Angular 2'
  ]
};
