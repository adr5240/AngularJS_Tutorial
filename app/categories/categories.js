angular.module('categories', [
    'eggly.models.categories'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('eggly.categories', {
                url: '/',
                views: {
                    'categories@': {
                        controller: 'CategoriesListCtrl as categoriesListCtrl',
                        templateUrl: 'app/categories/categories.tmpl.html'
                    }
                }
            });
    })
    .controller('CategoriesListCtrl', function CategoriesCtrl(CategoriesModel) {
        let categoriesListCtrl = this;
        CategoriesModel.getCategories()
            .then(function(result) {
                categoriesListCtrl.categories = result;
            });
    })
;
