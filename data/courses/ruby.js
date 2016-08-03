module.exports = {
  slug: 'ruby',
  title: 'The Ruby Course',
  description:
  `
  Ruby is an elegant, literate, object oriented programming language.

  Common tasks that might have taken many lines of code in most other languages can often be accomplished in a single line of Ruby. Combined with Rails or Sinatra, it provides a complete rapid application development framework, allowing complex briefs to be fulfilled in hours rather than weeks.
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
    require('../modules/rb-1'),
    require('../modules/rb-2'),
    require('../modules/rb-3'),
  ]
};
