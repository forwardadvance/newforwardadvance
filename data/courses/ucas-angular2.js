module.exports = {
  slug: 'ucas-angular2',
  title: 'Angular 2',
  description: 'The Angular 2 Course',
  courseModules: [
    require('../modules/ng2-1'),
    require('../modules/ng2-2'),
    require('../modules/typescript'),
    require('../modules/ng2-3'),
    require('../modules/webpack'),
    require('../modules/ng2-4')
  ],
  optionalModules: ['webpack', 'gulp']
};
