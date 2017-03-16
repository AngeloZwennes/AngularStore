var superMarket = angular.module('superMarket',
    ['dataFactory', 'ngMaterial', 'gridster']).controller('smCtrl', SupermarketController);
function SupermarketController($scope, $mdToast, dataFactory) {
    $scope.$watch('width', function () {
        //initializing
        $scope.gridsterOpts = {
            pushing: true,
            swapping: false,
            width: 'auto',
            height: 'auto',
            sparse: false,
            minRows: $scope.height,
            columns: $scope.width,
            colWidth: 'auto',
            rowHeight: 'match',
            margins: [$scope.gutter, $scope.gutter],
            defaultSizeX: 1,
            defaultSizeY: 1,
            resizable: {
                enabled: false
            },
            draggable: {
                enabled: false // whether dragging items is supported
            }
        };
    });
}

superMarket.directive('gridsterLayout', function ($window, $http, $mdDialog, $mdToast, dataFactory) {
    return {
        restrict: 'E',
        template: '<ul>' +
        '<div ng-repeat="product in products">' +
        '<li class="product" id="gridsterItem" gridster-item  data-row="product.y_position" data-col="product.x_position" data-sizex="product.width" data-sizey="product.height" data-id="product.id" ng-dblclick="clickedData(product)">' +
        '<div ng-bind="product.name"></div>' +
        '<div class="footer-title" ng-bind="product.footer_title"></div>' +
        '<div ng-if="module.information" class="infoboxmodule" ng-click="clickedInfo(module.information)" style="z-index: 1080">i</div>' +
        '</li>' +
        '</div>' +
        '</ul>',
        scope: {
            width: '=',
            height: '=',
            gutter: '=',
            products: '=?',
        },
        link: function (scope) {
            scope.products = dataFactory.getProducts();
            console.log(scope.products);
        }
    }
})