module.exports = function(scope, el, attrs, vm) {
  vm.state = attrs.toggle == "true";
  scope.$watch('vm.state', (state) => {
    if (state) {
      el.addClass('active'); el.removeClass('inactive')
    } else {
      el.addClass('inactive'); el.removeClass('active')
    }
  });
}
