minidocsModule.controller("WarningController", function ($modalInstance, $scope, fetchInitialData) {

  $scope.ok = function () {
    fetchInitialData();
    $modalInstance.close();
  }
});