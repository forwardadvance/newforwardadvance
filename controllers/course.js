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
  courses = require('../data/courses/all.js');
  if (req.courseId) {

  }
  req.assert('courseId', 'Course not found').isIn(courses.map((course) => course.code));

  var errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/courses');
  }

  res.render('course/', {
    title: 'Home'
  });
};
