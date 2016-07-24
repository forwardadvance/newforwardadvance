module.exports = function(req, res, next) {
  var courses = require('../data/courses');

  req.assert('courseSlug', 'Course not found').isIn(courses.map((course) => course.slug));
  var errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    res.status(404);
    return res.render('error/404', {title: '404: File Not Found', url: req.url });
  } else {
    req.course = require('../data/courses/' + req.params.courseSlug);
    next();
  }
}
