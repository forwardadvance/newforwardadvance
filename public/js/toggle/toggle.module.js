var ToggleController = require('./toggle.controller');
var ToggleDirective = require('./toggle.directive');

module.exports = angular.module('sidebar', [])
  .controller('ToggleController', ToggleController)
  .directive('toggle', ToggleDirective)
  .name

