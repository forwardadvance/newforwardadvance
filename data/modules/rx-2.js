module.exports = {
  title: 'JSX and the React Toolchain',
  duration: 0.5,
  slug: 'rx-tooling',
  price: 750,
  // description: 'Further React - Modules with Webpack, automated testing, AJAX, routing.',
  // outcome: 'Part one taught the fundamentals, here we learn how to wire together a real world app. You will be able to build a Single Page App (SPA).',

  exercises: [
    {
      slug: 'state',
      title: 'Stateful Components',
      description: 'In which we learn how a component can maintain it\'s own state, and build a simple clock.'
    },
    {
      slug: 'events',
      title: 'Handling Events (onClick) a counter',
      description: ''
    },
    {
      slug: 'state-immutability',
      title: 'Immutable state and the immutability helpers',
      description: 'Immutable state makes for difficult JavaScript. React provides a Mongo like helper for updating state atomically.'
    },
    {
      slug: 'integration',
      title: 'Integration Exercise - Todos',
      description: ''
    },
  ],
  outline: [
    'Client Server Interaction (talking to an API)',
    'Flux',
    'Dispatchers',
    'Actions',
    'Stores',
    'Routing'
  ]
}
