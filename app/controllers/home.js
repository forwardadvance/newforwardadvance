/**
 * GET /
 * Home page.
 */

var courses = require('../../data/courses');
var renderExercise = require('../helpers/render_exercise');

var getHomepageItems = () => {
  var homepageItems = []
  courses.forEach((course) => {
    course.courseModules.forEach((courseModule) => {
      if (courseModule.exercises.forEach) {
        courseModule.exercises.forEach((exercise) => {
          if (exercise.homepage) {
            homepageItems.push({
              course: course,
              courseModule: courseModule,
              exercise: exercise
            });
          }
        });
      }
    });
  });
  return homepageItems.sort((a,b) => a.date < b.date)
};

exports.index = function(req, res) {
  res.render('home', {
    title: 'Home',
    exercises: getHomepageItems(),
    renderExercise: renderExercise
  });
};
