minidocsModule.factory('usersService', ['$resource', function ($resource) {
  return $resource('/service/user', {},
    {
      'query': {isArray: false}
    });
}]);



minidocsModule.factory('envService', ['$resource', function ($resource) {
  return $resource('/v1/env', {},
    {
      'query': {isArray: false}
    });
}]);
