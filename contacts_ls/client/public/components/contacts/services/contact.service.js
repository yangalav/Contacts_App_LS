contacts.factory('Contact', function($resource) {
  return $resource(
    'http://localhost:8000/contacts/:id/',
    { id: '@id' },
    {
         'query': {
           method: 'GET',
           isArray: true,
           headers: {
             'Content-Type': 'application/json',
           },
         },
         'save': {
           method: "POST",
           url: 'http://localhost:8000/contacts/:id/',
           headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
           }
         },
         'delete': {
           method: "DELETE",
         }
    },
    {
         stripTrailingSlashes: false,
    }
  );
});
