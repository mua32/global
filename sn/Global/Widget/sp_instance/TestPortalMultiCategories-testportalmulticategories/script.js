/* 
 * Application : Global
 * ClassName   : sp_widget
 * Created On  : 2019-08-07 07:23:40
 * Created By  : admin
 * Updated On  : 2019-08-26 14:08:35
 * Updated By  : admin
 * URL         : /sp_widget.do?sys_id=11758cbadb0f7300e76e771c8c96195b
 */
(function() {
  /* populate the 'data' object */
  /* e.g., data.table = $sp.getValue('table'); */
	data.catalog=[];
	var catalogsysid="4f00b1c4db023300e76e771c8c96194d";
	var category =new GlideRecord("sc_category");
	category.addEncodedQuery("sc_catalog=4f00b1c4db023300e76e771c8c96194d^parent=NULL");
	category.query();
	while(category.next())
		{
			var temp={};
			temp.name=category.title.getDisplayValue();
			temp.decp=category.description.getDisplayValue();
			temp.sysid=category.sys_id.toString();
			temp.homepage_image=category.homepage_image.getDisplayValue();
			data.catalog.push(temp);
		}
	data.request= {
		name:'Demo Service Catalog',
		url:'?id=testportalcatalogitem'
	};
	

})();
