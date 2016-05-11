module.exports = {
  title: 'Components and Directives',
  duration: 0.5,
  slug: 'ng1-5',
  price: 1100,
  description: 'Components bundle templates and controllers together.',
  exercises: [
    {
      slug: 'directives',
      title: 'Writing Directives and Components',
      description: 'Directives tell the Angular compiler how to transform the DOM. They are the guts of Angular. You will learn all about them.',
      github: 'angular_directives_demo'
    },
    {
      slug: 'directive-compilation',
      title: 'Directive Compilation',
      description: 'We look at how the Angular compiler traverses the DOM, order of compilation, and when to use the compile, link and controller functions.',
      github: 'angular_directive_compilation_demo'
    },
    {
      slug: 'isolate-scope',
      title: 'Isolate Scopes',
      description: 'One of the most misunderstood features of directives. We learn, in detail, how to control the scope hierarchy.',
      github: 'angular_directive_isolate_scopes_demo'
    },
    {
      slug: 'transclusion',
      title: 'Directive Transclusion',
      description: 'Transclusion allows us to pass template content to a directive as an attribute. This is a lot more useful than it sounds. Here we see why.',
      github: 'angular_directive_transclusion_demo'
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
