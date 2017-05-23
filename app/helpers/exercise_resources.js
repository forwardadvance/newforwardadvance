/**
  * Resources Helper
  */
module.exports = function(exercise) {
  if (!exercise.github) {return "";}

  result = [
    '<div class="exercise_resources">',
      '<h2>Exercise Resources and Downloads</h2>',
      '<ul>',
        '<li>',
          '<a href="https://github.com/forwardadvance/'+exercise.github+'" rel="external" target="_blank">',
            'Github repository (exercise start points and solutions)',
          '</a>',
        '</li>',
        '<li>',
          '<a href="https://github.com/forwardadvance/'+exercise.github+'/archive/master.zip" rel="external">',
            'Download repository as a zip',
          '</a>',
        '</li>',
        '<li>',
          '<a href="github-mac://openRepo/https://github.com/forwardadvance/'+exercise.github+'" rel="external"}>',
            'Clone repository in Github app',
          '</a>',
        '</li>',
      '</ul>',
    '</div>'
  ]
  return result.join('\n');
}

