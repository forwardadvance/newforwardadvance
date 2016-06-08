'use strict';

var jade = require('jade');
var exerciseResourcesHelper = require('./exercise_resources');

var exercisePath = function(courseModule, exercise) {
  return [
    './data/exercises',
    courseModule.slug,
    exercise.slug,
  ].join('/')+'.jade';
};

module.exports = function(courseModule, exercise) {
  var path = exercisePath(courseModule, exercise);

  return jade.renderFile(path, {
    resources:exerciseResourcesHelper,
    exercise: exercise
  });
};
