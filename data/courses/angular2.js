module.exports = {
  slug: 'angular2',
  title: 'The Angular 2 Course',
  description: 'Angular 2 is a brand new iteration of Angular sporting components from the ground up.',
  duration: 3,
  courseModules: [
    require('../modules/ng2-1'),
    require('../modules/ng2-2'),
    require('../modules/typescript'),
    require('../modules/ng2-3'),
    require('../modules/ng2-4'),
    require('../modules/ng2-5')
    // require("../modules/es6")
  ],
  optionalModules: ['webpack', 'gulp']
};
