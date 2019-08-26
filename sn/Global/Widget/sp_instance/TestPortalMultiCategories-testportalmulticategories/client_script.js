/* 
 * Application : Global
 * ClassName   : sp_widget
 * Created On  : 2019-08-07 07:23:40
 * Created By  : admin
 * Updated On  : 2019-08-26 14:08:35
 * Updated By  : admin
 * URL         : /sp_widget.do?sys_id=11758cbadb0f7300e76e771c8c96195b
 */
function($scope) {
  /* widget controller */
  var c = this;
	$scope.dataCategoryList=c.data.catalog;
	var bc = [];
		if ($scope.data.request)
			bc[bc.length] = {label: $scope.data.request.name, url: $scope.data.request.url};
		//bc[bc.length] = {label:'Ticket Form', url: '#'};
		$rootScope.$broadcast('sp.update.breadcrumbs', bc);
}
