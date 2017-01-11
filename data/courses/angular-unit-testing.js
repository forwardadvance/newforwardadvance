module.exports = {
  slug: 'angular-unit-testing',
  title: 'The AngularJS Unit Testing Course',
  description:
  `
  The Angular unit testing course focusses purely on Jasmine, ngMocks, and how to test Angular
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
    require('../modules/ng1-unit-testing'),
  ],
};
