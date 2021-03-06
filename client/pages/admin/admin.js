// ---------------------------------------------------------------------------------------------------------------------
// AdminController
//
// @module admin.js
// ---------------------------------------------------------------------------------------------------------------------

function AdminController($scope, authSvc)
{
    $scope.template = '/pages/admin/signin.html';

    // Wait for the authSvc to initialize, then reload
    authSvc.initialized
        .then(function()
        {
            if(authSvc.authorized)
            {
                $scope.template = '/pages/admin/dashboard.html';
            } // end if
        });

    Object.defineProperty($scope, 'authenticated', {
        get: function(){ return authSvc.authorized; }
    });
} // end AdminController

// ---------------------------------------------------------------------------------------------------------------------

angular.module('chriscaseio').controller('AdminController', [
    '$scope',
    'AuthService',
    AdminController
]);

// ---------------------------------------------------------------------------------------------------------------------