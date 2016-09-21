module.exports = {
  slug: 'ionic2',
  title: 'The Ionic 2 Course',
  description: '',
  prerequisites: `
  This course is designed for Angular 2 developers who would like to be able to leverage their skills to produce cross platform HTML5 mobile apps. You should ideally have already attended the Angular 2 course.
  `,
  instructor: `
  Nicholas Johnson has been a professional JavaScript developer and trainer for the last 15 years. He has worked with major clients such as Countrywide, Cisco, Sky, O2, JP Morgan and Ryan Air. Nick is a hands-on practical coder, so lessons usually involve live coding and may go off piste if required. He is a prolific contributor to Stack Overflow, and has top rated answers to several canonical questions. His enthusiastic style of delivery is borne from a passionate love of JavaScript.
  `,
  information: `
  Attendees should bring their own laptops.
  `,
  courseModules: [
    require('../modules/ionic2-1')
    // require('../modules/ionic2-2')
  ]
};
