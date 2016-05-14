module.exports = {
  title: "Advanced Directives Content",
  duration: 0.5,
  slug: 'ng1-6',
  price: 1100,
  description: "What's new in Edge Angular.",
  exercises: [

    {
      slug: 'directive-compilation',
      title: 'Directive Compilation',
      description: 'We look at how the Angular compiler traverses the DOM, order of compilation, and when to use the compile, link and controller functions.',
      github: 'angular_directive_compilation_demo'
    },
    {
      slug: 'transclusion',
      title: 'Directive Transclusion',
      description: 'Transclusion allows us to pass template content to a directive as an attribute. This is a lot more useful than it sounds. Here we see why.',
      github: 'angular_directive_transclusion_demo'
    },
    {
      slug: 'routing',
      title: 'Routing',
      description: 'Learn about routing, Pushstate, and how to make an Angular site SEO friendly without hashbangs',
      github: 'angular_routing_demo'
    },
    {
      slug: 'ui-router',
      title: 'UI Router',
      description: 'The UI Router is an alternative state based router for Angular. Learn all about it.',
      github: 'angular_ui_router_demo'
    },
    {
      slug: 'animation',
      title: 'The Animation Framework (Optional)',
      description: 'Angular will inspect your CSS and modify it\'s behavior.',
      github: 'angular_animation_demo'
    },
  ],
  outline: [
    "Components",
    "Component Oriented Architecture",
    "Modules with RequireJS",
    "Getting ready for Angular 2"
  ]
}
