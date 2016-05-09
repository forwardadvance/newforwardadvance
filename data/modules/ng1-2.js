module.exports = {
  title: "Angular Intermediate",
  duration: 1,
  price: 1500,
  description: "The second part of the Angular course. Teaches you the skills you need to build a simple app using a modular component based design.",
  outcome: "You will be able to build a simple client server app based around a public API, This will generally be a Flickr app, but your own API can be used instead.",
  exercises: [

    {
      slug: "scope",
      title: "Scope and Scope Inheritance (View Model)",
      description: "$scope is an object in which you can store your models",
      github: "angular_scope_demo"
    },
    {
      slug: "watch",
      title: "Watch and the $digest cycle",
      description: "Here we delve into the workings of the digest cycle and discover the logic behind Angular data binding.",
      github: "angular_watch_demo"
    },
    {
      slug: "modules",
      title: "Angular Modules.",
      description: "Here we delve into the workings of the digest cycle and discover the logic behind Angular data binding.",
      github: "angular_modules_demo"
    },
    {
      slug: "di",
      title: "Dependency Injection (DI)",
      description: "Dependency Injection allows us to require components simply be referring to them. Learn about DI and also split your code into sensible modules.",
      github: "angular_di_demo"
    },

    {
      slug: "homework",
      title: "Homework",
      description: "Fun and simple homework. It's like school"
    },

    {
      slug: "karma",
      title: "Unit Testing with Karma (Testacular)",
      description: "All good developers write unit tests. This is ongoing through the rest of the course.",
      github: "angular_karma_demo"
    },
    {
      slug: "ajax",
      title: "AJAX",
      description: "Drop JSON into your $scope and it will automatically bind it to the template.",
      github: "angular_ajax_demo"
    },
    {
      slug: "ng-include",
      title: "Templates and the Template Cache",
      description: "Talking to the template cache directly can make your app feel more responsive. Learn how.",
      github: "angular_template_cache_demo"
    },
    {
      slug: "animation",
      title: "The Animation Framework (Optional)",
      description: "Angular will inspect your CSS and modify it's behavior.",
      github: "angular_animation_demo"
    },
    {
      slug: "custom-filters",
      title: "Writing Custom Filters",
      description: "A filter is a function for modifying and presenting data. We learn to write and use our own.",
      github: "angular_custom_filters_demo"
    },
    {
      slug: "services",
      title: "Writing Services",
      description: "Services are singleton objects that act as repositories of useful functions. How to make them, and when to use them.",
      github: "angular_services_demo"
    },
    {
      slug: "directives",
      title: "Writing Directives",
      description: "Directives tell the Angular compiler how to transform the DOM. They are the guts of Angular. You will learn all about them.",
      github: "angular_directives_demo"
    },
    {
      slug: "homework-2",
      title: "Homework 2",
      description: "Again, like school, but better paid."
    }
  ],
  outline: [
    "Testing with Karma (this is ongoing through the rest of the course)",
    "Client Server Architecture (AJAX)",
    "ControllerAs",
    "REST",
    "JSONP, CORS and the same domain policy",
    "Writing modular code with services and factories",
    "Writing custom filters",
    "Beginning directives"
  ]
}
