contacts.factory('Contact', function($resource) {
  return $resource(
    'http://localhost:8000/contacts/:id/',
    {},
    {
         'query': {
           method: 'GET',
           isArray: true,
           headers: {
             'Content-Type': 'application/json'
           }
         }
    },
    {
         stripTrailingSlashes: false
    }
  );
});
