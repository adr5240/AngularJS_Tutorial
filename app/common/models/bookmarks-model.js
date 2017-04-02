angular.module('eggly.models.bookmarks', [

])
    .service('BookmarksModel', function($http) {
        let model = this,
            bookmarks,
                URLS = {
                    FETCH: 'data/bookmarks.json'
                };

        function extract(result) {
            return result.data;
        }

        function cacheBookmarks(result) {
            bookmarks = extract(result);
            return bookmarks;
        }

        model.getBookmarks = function() {
            return $http.get(URLS.FETCH).then(cacheBookmarks);
        };
    })
;
