angular.module('categories.bookmarks.create', [
    'eggly.models.bookmarks'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('eggly.categories.bookmarks.create', {
                url: '/bookmarks/create',
                templateUrl: 'app/categories/bookmarks/create/bookmark-create.tmpl.html',
                controller: 'CreateBookmarkCtrl as createBookmarkCtrl'
            })
        ;
    })
    .controller('CreateBookmarkCtrl', function ($state, $stateParams, BookmarksModel) {
        let createBookmarkCtrl = this;

        function returnToBookmarks() {
            $state.go('eggly.categories.bookmarks', {
                category: $stateParams.category
            });
        }

        function cancelCreating() {
            returnToBookmarks();
        }

        function createBookmark(bookmark) {
            BookmarksModel.createBookmark(bookmark);
            returnToBookmarks();
        }

        function resetForm() {
            createBookmarkCtrl.newBookmark = {
                title: '',
                url: '',
                category: $stateParams.category
            };
        }

        createBookmarkCtrl.cancelCreating = cancelCreating;
        createBookmarkCtrl.createBookmark = createBookmark;

        resetForm();
    })
;
