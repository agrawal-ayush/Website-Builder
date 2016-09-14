/**
 * Created by Ayush on 9/10/2016.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController",WidgetListController);

    function WidgetListController($location, $sce, $routeParams, WidgetService) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.pageId = $routeParams.pageId;
        vm.websiteId = $routeParams.websiteId;
        vm.getSafeHtml = getSafeHtml;
        vm.getSafeUrl = getSafeUrl;
        vm.widgetEdit = widgetEdit;
        
        function widgetEdit(widget) {
            if(widget.widgetType === "HEADER"){
                location.href = "#/user/"+vm.userId+"/website/"+vm.websiteId+"/page/"+vm.pageId+"/widget/editHeader";
            }
            else if(widget.widgetType === "YOUTUBE"){
                location.href = "#/user/"+vm.userId+"/website/"+vm.websiteId+"/page/"+vm.pageId+"/widget/editYoutube";
            }
            else if(widget.widgetType === "IMAGE"){
                location.href = "#/user/"+vm.userId+"/website/"+vm.websiteId+"/page/"+vm.pageId+"/widget/editImage";
            }
        }
        

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
        	WidgetService
        		.findWidgetsForPageId(vm.pageId)
        		.then(function(response){
        			vm.widgets = response.data;
        		},
        		function(error){
        			vm.error = "Network Error! Please your network and refresh";
        		})
        }
        init();
    }
})();
