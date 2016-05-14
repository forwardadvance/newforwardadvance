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
      github: 'angular_ajax_demo'
    },
    {
      slug: 'ng-include',
      title: 'Templates and the Template Cache',
      description: 'Talking to the template cache directly can make your app feel more responsive. Learn how.',
      github: 'angular_template_cache_demo'
    },
    {
      slug: 'services',
      title: 'Writing Services and Factories',
      description: 'Services are singleton objects that act as repositories of useful functions. How to make them, and when to use them.',
      github: 'angular_services_demo'
    },
    {
      slug: 'validation',
      title: 'Form Validation',
      description: 'We validate our inputs the right way',
      github: 'angular_form_validation_demo'
    },
  ]
};
