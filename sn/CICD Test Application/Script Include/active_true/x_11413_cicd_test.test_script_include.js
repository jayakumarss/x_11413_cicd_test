/* 
 * Application : CICD Test Application
 * ClassName   : sys_script_include
 * Created On  : 2019-02-28 13:45:57
 * Created By  : admin
 * Updated On  : 2019-10-19 21:04:13
 * Updated By  : admin
 * URL         : /sys_script_include.do?sys_id=1b9ed113dbf32300fcf41780399619fc
 */
/**
 * Class Description
 * This is a test script include for the SNOW application to be deployed using the CICD Pipeline
 * @class 
 * @author System Administrator [admin]
 * @memberof x_11413_cicd_test.module:sys_script_include
 */
var test_script_include = Class.create();
test_script_include.prototype = /** @lends x_11413_cicd_test.module:sys_script_include.test_script_include.prototype */ {
	/**
	 * Description
	 * 
	 * @returns {undefined}
	 */
	initialize: function() {
	},
	
	/**
	 * Description
	 * 
	 * @returns {boolean}
	 */
	dummy: function(){
		gs.addInfoMessage("Testing devops");
		return true;
	},
	
	type: 'test_script_include'
};
