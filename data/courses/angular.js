module.exports = {
  slug: 'angular',
  title: 'The AngularJS Course',
  description:
  `
  Angular is the wildly popular and productive front-end MVC JavaScript framework championed by Google. It is in many ways a perfect meeting place between the agile world of JavaScript and powerful design patterns, more commonly found in server-side languages like Java. Built from the ground up with testability in mind, dependency injection allows us to isolate components and yoke them into a test harness.

  This course is practical. You will, right from day one, be building widgets and applications with real-world applicability. We will build against tests from the end of day one, and design sensible, component-based solutions using best practice. You will also gain an awareness of the wider JavaScript toolchain ecosystem, including Node, Karma, and Webpack.

  The course will start with the fundamentals and will lead all the way up to advanced topics like code organisation, the digest cycle and modifying the scope of a transclusion in a directive.
  `,
  prerequisites: `
  This course is designed for software developers who are interested in learning how to build single page web applications or mobile hybrid apps. You should have good coding skills, and some skill with JavaScript. You will also need to be able to compose a basic website in HTML and CSS.
  `,
  instructor: `
  Nicholas Johnson has been a professional JavaScript developer and trainer for the last 15 years. He has worked with major clients such as Countrywide, Cisco, Sky, O2, JP Morgan and Ryan Air. Nick is a hands-on practical coder, so lessons usually involve live coding and may go off piste if required. He is a prolific contributor to Stack Overflow, and has top rated answers to several canonical questions. His enthusiastic style of delivery is borne from a passionate love of JavaScript.
  `,
  information: `
  Attendees should bring their own laptops.
  `,
  duration: 3,
  courseModules: [
    require('../modules/ng1-1'),
    require('../modules/ng1-2'),
    require('../modules/ng1-3'),
    require('../modules/ng1-4'),
    require('../modules/ng1-5'),
    require('../modules/ng1-6'),
    require('../modules/ng1-7'),
    require('../modules/ng1-8')
  ],
  optionalModules: ['js2', 'es6', 'webpack', 'browserify', 'gulp']
};
