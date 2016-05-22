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
      github: 'angular_directives_demo'
    },
    {
      slug: 'isolate-scope',
      title: 'Isolate Scopes',
      description: 'One of the most misunderstood features of directives. We learn, in detail, how to control the scope hierarchy.',
      github: 'angular_directive_isolate_scopes_demo'
    },
    {
      slug: 'modules',
      title: 'Angular Modules.',
      description: 'Angular comes with it\'s own Module system.',
      github: 'angular_modules_demo'
    },
    {
      slug: 'browserify',
      title: 'Breaking code into files with Browserify',
      description: 'Putting code all in one file in not cool. Let\'s fix that problem',
      github: 'angular_browserify_demo'
    },
    {
      slug: 'homework-2',
      title: 'Homework 2',
      description: 'Again, like school, but better paid.'
    },
  ],
  outline: [
    'Components',
    'Component Oriented Architecture',
    'Modules with RequireJS',
    'Getting ready for Angular 2'
  ]
};
