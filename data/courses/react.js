module.exports = {
  slug: 'react',
  title: 'The React/Flux Course with Redux',
  description: `
  React is the exciting new framework from Facebook. Built in house to support their own JavaScript-heavy site, and designed to facilitate three goals: performance, coder agility, and scale.

  React is a component based front-end library that allows you to build applications out of a tree of small, testable, modular components. It features a diffing engine that makes DOM manipulation incredibly fast.

  Flux is an architectural pattern characterised by one-way data flow, immutability and message passing. We create a central data store, and then pass messages to it to tell it how to change. Changes then flow into the component tree, updating the DOM. It can seem intimidating at first, but quickly becomes natural. In this course, we use Redux for Flux, which is currently the best practice solution.

  This course is practical. You will, right from day one, be building components and applications with real-world applicability. We will build against tests from the end of day one, and design sensible, component-based solutions using best practice. You will also gain an awareness of the wider JavaScript toolchain ecosystem, including Node, Karma, and Webpack.
  `,
  prerequisites: `
  This course is designed for software developers who are interested in learning how to build single page web applications or mobile hybrid apps. You should have good coding skills, and some skill with JavaScript. You will also need to be able to compose a basic website in HTML and CSS.
  `,
  instructor: `
  Nicholas Johnson has been a professional JavaScript developer and trainer for the last 15 years. He has worked with major clients such as Countrywide, Cisco, Sky, O2, JP Morgan and Ryan Air. Nick is a hands-on practical coder, so lessons usually involve live coding and plenty of practical exercises and may go off piste if required. He is a prolific contributor to Stack Overflow, and has top rated answers to several canonical questions. His enthusiastic style of delivery is borne from a passionate love of JavaScript.
  `,
  information: `
  Attendees should bring their own laptops.
  `,
  courseModules: [
    require('../modules/rx-intro'),
    require('../modules/rx-flux')
  ],
  optionalModules: ['js2', 'browserify', 'gulp']
};
