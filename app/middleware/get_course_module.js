module.exports = function(req, res, next) {
  var course = req.course;

  req.assert('moduleSlug', 'Course Module not found').isIn(course.courseModules.map((cm) => cm.slug));
  var errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    res.status(404);
    return res.render('error/404', {title: '404: File Not Found', url: req.url });
  } else {
    req.courseModule = require('../../data/modules/' + req.params.moduleSlug);
    next();
  }
}
