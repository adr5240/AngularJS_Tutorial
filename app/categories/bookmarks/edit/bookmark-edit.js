angular.module('categories.bookmarks.edit', [
    'eggly.models.bookmarks'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('eggly.categories.bookmarks.edit', {
                url: '/bookmarks/:bookmarkId/edit',
                templateUrl: 'app/categories/bookmarks/edit/bookmark-edit.tmpl.html',
                controller: 'EditBookmarkCtrl as editBookmarkCtrl'
            })
        ;
    })
    .controller('EditBookmarkCtrl', function () {
        
    })
;
