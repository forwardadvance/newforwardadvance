/**
 * GET /course/:courseId/:exerciseId/
 * Exercise page.
 */
exports.show = function(req, res) {

  var jade = require('jade');
  var course = req.course;
  var courseModule = req.courseModule;
  var exercise = req.exercise;

  var exercisePath = [
    '../data/exercises',
    courseModule.slug,
    exercise.slug,
  ].join('/');

  res.render('exercise/show', {
    title: exercise.title,
    description: exercise.description,
    course: course,
    courseModule: courseModule,
    exercise: exercise,
    exerciseContent: jade.renderFile('./data/exercises/ng1-1/templates.jade')
  });
};
