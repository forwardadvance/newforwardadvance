module.exports = {
  "title": "Angular Foundation",
  "duration": 1,
  "price": 1100,
  "description": "Foundations of AngularJS. This module covers all the basic concepts and tries to make Angular less surprising. This is part one the full Angular course, or it can be a complete course if you only need the basics.",
  "outcome": "This module will teach you the basics of how an Angular app is put together. By the end you will be able to build a simple login form or edit component.",
  "exercises": {
    "angular-intro": {
      "title": "Introducing Angular - Theory and Architecture",
      "description": "Here we learn, at a high level, what angular is, how it works, and how we should think about it."
    },
    "templates": {
      "title": "Hello World",
      "description": "We build a Hello World app and learn about compilation and binding.",
      "github": "angular_templates_demo",
      "learnings": [
        "ng-app",
        "curly bindings",
        "template expressions"
      ]
    },
    "binding": {
      "title": "Binding",
      "description": "We discover the spooky magic that is Angular data binding (of course it's not magic really, as we shall very soon see).",
      "github": "angular_binding_demo",
      "learnings": [
        "Binding the template to a model",
        "ng-model",
        "ng-bind"
      ]
    },
    "more-binding": {
      "title": "Class, attribute and conditional binding",
      "description": "In which we bind expressions to classes and attributes and add conditional logic to our templates.",
      "github": "angular_further_binding_demo",
      "learnings": [
        "binding attributes",
        "ng-class",
        "ng-show / ng-hide",
        "ng-if and $scope issues"
      ]
    },
    "controllers": {
      "title": "Controllers",
      "description": "Controllers glue the scope to the template.",
      "github": "angular_controllers_demo"
    },
    "scope": {
      "title": "Scope and Scope Inheritance (View Model)",
      "description": "$scope is an object in which you can store your models",
      "github": "angular_scope_demo"
    },
    "watch": {
      "title": "Watch and the $digest cycle",
      "description": "Here we delve into the workings of the digest cycle and discover the logic behind Angular data binding.",
      "github": "angular_watch_demo"
    },
    "di": {
      "title": "Dependency Injection (DI)",
      "description": "Dependency Injection allows us to require components simply be referring to them. Learn about DI and also split your code into sensible modules.",
      "github": "angular_di_demo"
    },
    "homework": {
      "title": "Homework",
      "description": "Fun and simple homework. It's like school"
    }
  },
  "outline": [
    "Templates",
    "Controllers",
    "Scope",
    "Prototypical $scope inheritance",
    "Managing $scope inheritance with objects and controllerAs",
    "Watchers",
    "Dependency injection (DI)",
    "Minification safe DI",
    "Modules",
    "The $digest",
    "Using IIFEs to write better code."
  ]
}
