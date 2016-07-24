var link = require('./toggle.link');
var controller = require('./toggle.controller');

module.exports = function() {
  return {
    controller: controller,
    controllerAs: 'vm',
    scope: true,
    link: link
  }
}
