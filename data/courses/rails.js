module.exports = {
  slug: 'rails',
  title: 'The Ruby and Rails Course',
  description:
  `
   Rails is a Rapid Application Development framework designed to maximised programmer productivity and happiness. You will be able to produce complex apps in days rather than weeks.

   This course will teach you both advanced Ruby and Rails. You will be comfortable with advanced Ruby techniques, code architecture and metaprogramming, and will be able to use Rails to crete web applications.

   The course is practical. You will be taken through a series of exercises which will allow you to produce a product. The exact choice of product will be left to an extent up to the your discretion.
  `,
  // prerequisites: `
  // This course is designed for software developers who wish to learn Ruby. Ideally you will have an understanding of at least one other programming language.
  // `,
  instructor: `
  Nicholas Johnson has been a professional Ruby developer for the last 10 years, working with pure Ruby, Rails and Sinatra.
  `,
  information: `
  Unless otherwise arranged, attendees should bring their own laptops.
  `,
  setup: `
  If attendees are providing their own hardware, the following will be needed:

  1. Ruby 2.2.2 or above. Get it from here: <https://www.ruby-lang.org/en/>
  2. Rails 4 or 5, depending on requirements. Get it here: <http://rubyonrails.org/>
  3. Admin access to a machine. We will be installing software, so you'll need admin permissions on your machine.
  `,
  duration: 3,
  courseModules: [
    require('../modules/rb-1'),
    require('../modules/rails-1'),
    require('../modules/rb-2'),
    require('../modules/rails-2'),
    require('../modules/rb-3'),
    require('../modules/rails-3'),
  ]
};

