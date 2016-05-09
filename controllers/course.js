/**
 * GET /courses
 * Course Index page.
 */
exports.index = function(req, res) {
  var courses = require('../data/courses/all.js');
  res.render('course/index', {
    title: 'Courses',
    courses: courses
  });
};

/**
 * GET /courses/:courseId
 * Course page.
 */
exports.show = function(req, res) {
  res.render('course/show', {
    title: 'Home',
    course: req.course
  });
};
