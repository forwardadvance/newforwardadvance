var courses = require('../data/courses');
var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

courses.forEach((course) => {
  describe("course: " + course.slug, () => {
    it('has a slug', () => {
      expect(course.slug).to.exist;
    });
    it('has a title', () => {
      expect(course.title).to.exist;
    });
    it('has a description', () => {
      expect(course.description).to.exist;
    });
    it('has a courseModules array', () => {
      expect(course.courseModules).to.exist;
      expect(course.courseModules instanceof Array).to.be.true;
    });
    describe('courseModules for ' + course.slug, () => {
      course.courseModules.forEach((courseModule) => {
        describe(course.slug + " : " + courseModule.slug, () => {
          it('is defined', () => {
            expect(courseModule).to.exist;
          });
          it('has exercises', () => {
            expect(courseModule.exercises).to.exist;
            expect(courseModule.exercises.length).to.be.above(0);
          });
        });
      });
    })
  });
});

