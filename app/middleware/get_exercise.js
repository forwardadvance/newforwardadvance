module.exports = function(req, res, next) {
  var courseModule = req.courseModule;


  /**
    * Check we have a valid exercise
    */
  req.assert('exerciseSlug', 'Course Module not found').isIn(courseModule.exercises.map((cm) => cm.slug));
  var errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    res.status(404);
    return res.render('error/404', {title: '404: File Not Found', url: req.url });
  } else {
    req.exercise = courseModule.exercises.find((e) => e.slug === req.params.exerciseSlug)
    next();
  }
}
