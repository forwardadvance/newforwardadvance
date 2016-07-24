var request = require('supertest');
var app = require('../app.js');
var courses = require('../data/courses')

describe('GET /', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
});

describe('GET /login', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/login')
      .expect(200, done);
  });
});

describe('GET /courses', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/courses')
      .expect(200, done);
  });
});

courses.forEach((course) => {
  describe('GET /course/' + course.slug, () => {
    it('should return 200 OK', function(done) {
      request(app)
        .get('/course/' + course.slug)
        .expect(200, done);
    });
  })
  describe('GET /course/' + course.slug + '/book', () => {
    it('should return 200 OK', function(done) {
      request(app)
        .get('/course/' + course.slug + '/book')
        .expect(200, done);
    });
  })
  course.courseModules.forEach((courseModule) => {
    courseModule.exercises.forEach((exercise) => {
      var url = [
        '/course',
        course.slug,
        courseModule.slug,
        exercise.slug
      ].join('/');
      describe('GET ' + url, () => {
        it('should return 200 OK', function(done) {
          request(app)
            .get(url)
            .expect(200, done);
        });
      })
    });
  });
})


describe('GET /signup', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/signup')
      .expect(200, done);
  });
});

// describe('GET /api', function() {
//   it('should return 200 OK', function(done) {
//     request(app)
//       .get('/api')
//       .expect(200, done);
//   });
// });

describe('GET /contact', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/contact')
      .expect(200, done);
  });
});

describe('GET /random-url', function() {
  it('should return 404', function(done) {
    request(app)
      .get('/reset')
      .expect(404, done);
  });
});
