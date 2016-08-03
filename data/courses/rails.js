module.exports = {
  slug: 'rails',
  title: 'The Rails Course',
  description:
  `
   Rails is a Rapid Application Development framework designed to maximised programmer productivity and happiness. You will be able to produce complex apps in days rather than weeks.
  `,
  // prerequisites: `
  // This course is designed for software developers who wish to learn Ruby. Ideally you will have an understanding of at least one other programming language.
  // `,
  // instructor: `
  // Nicholas Johnson has been a professional Ruby developer for the last 10 years, working with pure Ruby, Rails and Sinatra.
  // `,
  // information: `
  // Attendees should bring their own laptops.
  // `,
  duration: 3,
  courseModules: [
    require('../modules/rails-1'),
    require('../modules/rails-2'),
    require('../modules/rails-3'),
  ]
};

