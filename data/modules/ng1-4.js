module.exports = {
  title: 'Angular Client/Server architecture',
  duration: 0.5,
  slug: 'ng1-4',
  price: 1100,
  description: 'Talking to a server is easy and fun with Angular.',
  outcome: 'You will be able to build an AJAX based site, and will know how to split your code out into services.',
  exercises: [

    {
      slug: 'ajax',
      title: 'AJAX',
      description: 'Drop JSON into your $scope and it will automatically bind it to the template.',
      github: 'angular_ajax_demo',
      learnings: [
        '',
        '',
        ''
      ]
    },
    {
      slug: 'ng-include',
      title: 'Templates, ng-include and the $templateCache',
      description: 'Talking to the template cache directly can make your app feel more responsive. Learn how.',
      github: 'angular_template_cache_demo',
      learnings: [
        '',
        '',
        ''
      ]
    },
    {
      slug: 'services',
      title: 'Services and Factories as AJAX wrappers',
      description: 'The Controller is not the right place for business logic. Here we create a Service to pick up the load.',
      github: 'angular_services_demo',
      learnings: [
        '',
        '',
        ''
      ]
    },
    // {
    //   slug: 'validation',
    //   title: 'Form Validation',
    //   description: 'We validate our inputs the right way',
    //   github: 'angular_form_validation_demo'
    // },
  ]
};
