/**
 * Created by Ayush on 9/10/2016.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController",WidgetListController);

    function WidgetListController($sce, $routeParams, WidgetService) {
        var vm = this;
        vm.pageId = $routeParams.pageId;
        vm.getSafeHtml = getSafeHtml;
        vm.getSafeUrl = getSafeUrl;

        function getSafeUrl(widget) {
            var urlParts = widget.url.split("/");
            var id = urlParts[urlParts.length-1];
            var url = "https://www.youtube.com/embed/" + id;
            return $sce.trustAsResourceUrl(url);
        }

        function getSafeHtml(widget) {
            return $sce.trustAsHtml(widget.text);
        }

        function init() {
            vm.widgets = WidgetService.findWidgetsForPageId(vm.pageId);
        }
        init();


    }
})();