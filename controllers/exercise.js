'use strict';
/**
 * GET /course/:courseId/:exerciseId/
 * Exercise page.
 */
exports.show = function(req, res) {
  var jade = require('jade');
  var exerciseResourcesHelper = require('../helpers/exercise_resources');
  var course = req.course;
  var courseModule = req.courseModule;
  var exercise = req.exercise;


  var exercisePath = [
    './data/exercises',
    courseModule.slug,
    exercise.slug,
  ].join('/')+'.jade';

  res.render('exercise/show', {
    title: exercise.title,
    description: exercise.description,
    course: course,
    courseModule: courseModule,
    exercise: exercise,
    exerciseContent: jade.renderFile(exercisePath, {
      resources:exerciseResourcesHelper,
      exercise: exercise
    })
  });
};
