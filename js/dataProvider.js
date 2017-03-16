var dataProvider = angular.module('dataFactory', []);
dataProvider.factory('dataFactory', function () {
    this.products = [
        {
            "id": 1,
            "width": 1,
            "height": 1,
            "x_position": 0,
            "y_position": 0,
            "name": "Soep",
            "information": "blabla",
            "footer_title": "footertitel"
        },
        {
            "id": 2,
            "width": 1,
            "height": 1,
            "x_position": 0,
            "y_position": 1,
            "name": "Kaas",
            "information": "blabla",
            "footer_title": "footertitel"
        },
        {
            "id": 3,
            "width": 1,
            "height": 1,
            "x_position": 1,
            "y_position": 0,
            "name": "Worst",
            "information": "blabla",
            "footer_title": "footertitel"
        },
        {
            "id": 4,
            "width": 1,
            "height": 1,
            "x_position": 1,
            "y_position": 1,
            "name": "Cola",
            "information": "blabla",
            "footer_title": "footertitel"
        },
        {
            "id": 5,
            "width": 1,
            "height": 1,
            "x_position": 2,
            "y_position": 0,
            "name": "Fanta",
            "information": "blabla",
            "footer_title": "footertitel"
        },
        {
            "id": 6,
            "width": 1,
            "height": 1,
            "x_position": 2,
            "y_position": 1,
            "name": "Ijsbergsla",
            "information": "blabla",
            "footer_title": "footertitel"
        }
    ];
    this.getProducts = function () {
        return this.products;
    }
    return this;
});