'use strict';
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
  var jade = require('jade');
  var exerciseResourcesHelper = require('../helpers/exercise_resources');
  var course = req.course;
  var courseModule = course.courseModules[0];
  var exercise = courseModule.exercises[0];

  var exercisePath = [
    './data/exercises',
    courseModule.slug,
    exercise.slug,
  ].join('/')+'.jade';

  res.render('course/show', {
    title: course.name,
    course: course,
    courseModule: courseModule,
    exercise: exercise,
    exerciseContent: jade.renderFile(exercisePath, {
      resources:exerciseResourcesHelper,
      exercise: exercise
    })
  });
};


/**
 * GET /courses/all
 * Course Docs page.
 */
exports.book = function(req, res) {
  var jade = require('jade');
  var renderExercise = require('../helpers/render_exercise');
  var course = req.course;

  res.render('course/book', {
    title: course.name,
    course: course,
    renderExercise: renderExercise
  });
};

