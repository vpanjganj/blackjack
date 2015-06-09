/**
 * Created by Vahid on 09/06/15.
 */
controllers.controller('modalStartController', ['$scope', '$modalInstance', function ($scope, $modalInstance) {


    $scope.numberOfPlayers = '2'; //2 players by default


    //By pressing ok in the modal, selected number is sent back to the controller
    $scope.ok = function () {
        $modalInstance.close($scope.numberOfPlayers);
    };


}]);
