module.exports = {
  slug: 'angular2',
  title: 'The Angular 2 Course',
  description: 'Angular 2 is a brand new iteration of Angular sporting components from the ground up.',
  prerequisites: `
  This course is designed for software developers who are interested in learning how to build single page web applications or mobile hybrid apps. You should have good coding skills, and some skill with JavaScript. You will also need to be able to compose a basic website in HTML and CSS.
  `,
  instructor: `
  Nicholas Johnson has been a professional JavaScript developer and trainer for the last 15 years. He has worked with major clients such as Countrywide, Cisco, Sky, O2, JP Morgan and Ryan Air. Nick is a hands-on practical coder, so lessons usually involve live coding and may go off piste if required. He is a prolific contributor to Stack Overflow, and has top rated answers to several canonical questions. His enthusiastic style of delivery is borne from a passionate love of JavaScript.
  `,
  information: `
  Attendees should bring their own laptops.
  `,
  courseModules: [
    require('../modules/ng2-thinking-in-components'),
    require('../modules/ng2-testing-and-tooling'),
    require('../modules/ng2-services-and-ajax'),
    // require('../modules/ionic2-1'),
    require('../modules/ng2-6'),
    // require("../modules/es6")
  ],
  optionalModules: ['webpack', 'gulp']
};
