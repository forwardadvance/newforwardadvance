module.exports = {
  title: 'Angular Unit Testing',
  duration: 2,
  slug: 'ng1-unit-testing',
  price: 1100,
  description: `
  This module teaches you in depth how to test your application
  `,
  outcome: 'You will be able to write unit tests for your app, and will understand BDD for Angular.',
  exercises:[
    require('../exercises/ng1-unit-testing/intro'),
    require('../exercises/ng1-unit-testing/jasmine'),
    require('../exercises/ng1-unit-testing/testing-controllers'),
    require('../exercises/ng1-unit-testing/ng-mocks'),
    require('../exercises/ng1-unit-testing/services'),
    require('../exercises/ng1-unit-testing/spies-stubs-mocks'),
    // require('../exercises/ng1-unit-testing/mocking-services'),
    require('../exercises/ng1-unit-testing/karma'),
    require('../exercises/ng1-unit-testing/webpack'),
    require('../exercises/ng1-unit-testing/ajax'),
    require('../exercises/ng1-unit-testing/component-testing'),
    require('../exercises/ng1-unit-testing/routes'),
    require('../exercises/ng1-unit-testing/filters'),
  ]
};
