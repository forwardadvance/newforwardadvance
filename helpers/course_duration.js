'use strict';
module.exports = function(course) {
  var duration = 0;
  course.courseExercises.forEach((m) => duration += m.duration);
  return duration;
};
