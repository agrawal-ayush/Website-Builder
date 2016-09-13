/**
 * Created by Ayush on 9/14/2016.
 */

(function(){
    angular
        .module("WebAppMaker")
        .factory("FlickrService",FlickrService);

    var key = "ac3853a2bac1d18d30bf58b6539a9283";
    var secret = "69eba5cda620c499";
    var urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";

    function FlickrService($http) {
        var api = {
            searchPhotos : searchPhotos
        }

        return api;

        function searchPhotos(searchTerm) {
            var url = urlBase
                .replace("API_KEY", key)
                .replace("TEXT", searchTerm);
            return $http.get(url);
        }

    }
})();
