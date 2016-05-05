/**
 * GET /course/:courseId/:exerciseId/
 * Exercise page.
 */
exports.show = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};
