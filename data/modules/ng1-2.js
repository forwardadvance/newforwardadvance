module.exports = {
  title: "Angular $Scope and DI",
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
