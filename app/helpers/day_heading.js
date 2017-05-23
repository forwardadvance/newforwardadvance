'use strict';
module.exports = function(day, title, wrapper ) {
  wrapper = wrapper || 'h3';

  var content = [
    'Day',
    Math.floor(day) + 1,
    (day % 1 === 0) ? 'Morning' : 'Afternoon'
    ].join(' ');

  if (title) {
    content = [
      content,
      title
    ].join(' - ')
  }

  return [
    '<',
    wrapper,
    '>',
    content,
    '</',
    wrapper,
    '>',
    ].join('');
};
