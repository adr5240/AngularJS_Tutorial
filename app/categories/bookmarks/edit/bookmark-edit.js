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
    .controller('EditBookmarkCtrl', function ($state, $stateParams, BookmarksModel) {
        let editBookmarkCtrl = this;

        function returnToBookmarks() {
            $state.go('eggly.categories.bookmarks', {
                category: $stateParams.category
            });
        }

        function cancelEditing() {
            returnToBookmarks();
        }

        function updatedBookmark() {
            editBookmarkCtrl.bookmark = angular.copy(editBookmarkCtrl.editedBookmark);
            BookmarksModel.updateBookmark(editBookmarkCtrl.bookmark);
            returnToBookmarks();
        }

        BookmarksModel.getBookmarkById($stateParams.bookmarkId)
            .then(function(bookmark) {
                if(bookmark) {
                    editBookmarkCtrl.bookmark = bookmark;
                    editBookmarkCtrl.editedBookmark = angular.copy(editBookmarkCtrl.bookmark);
                } else {
                    returnToBookmarks();
                }
            });

        editBookmarkCtrl.cancelEditing = cancelEditing;
        editBookmarkCtrl.updateBookmark = updatedBookmark;
    })
;
