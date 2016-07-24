module.exports = {
  title: 'React Client Server interaction and Testing',
  duration: 0.5,
  slug: 'rx-3',
  price: 750,
  description: 'Further React - Modules with Webpack, automated testing, AJAX, routing.',
  outcome: 'Part one taught the fundamentals, here we learn how to wire together a real world app. You will be able to build a Single Page App (SPA).',
  exercises: [
    {
      slug: 'ajax',
      title: 'AJAX (with fetch and componentDidMount)',
      description: '',
      learnings: [
        'AJAX',
        'Same domain policy',
        'componentDidMount',
        'ES6 fetch API and polyfills'
      ]
    },
    {
      slug: 'children',
      title: 'Children',
      description: ''
    },
    {
      slug: 'testing',
      title: 'Automated Testing of React',
      description: 'We use Jest and the React Test Utilities to test a React application. Testing matters, so this is ongoing for the rest of the course.',
      learnings: [
        'Why testing matters',
        'Unit testing vs. integration testing',
        'Jest',
        'Test helpers'
      ]
    }
  ],
  outline: [
    'Client Server Interaction (talking to an API)',
    'Flux',
    'Dispatchers',
    'Actions',
    'Stores',
    'Routing'
  ]
};
