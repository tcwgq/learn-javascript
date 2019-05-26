//表格隔行换色的插件
/**
	author:tcwgq
	date:2016/09/12
	example
	html_code:
		<table>
		<tr><td>序号</td><td>名称</td><td>价格</td><td>数量</td></tr>
		<tr><td>1</td><td>apple</td><td>5288</td><td>1</td></tr>
		<tr><td>2</td><td>nokia</td><td>6888</td><td>2</td></tr>
		<tr><td>3</td><td>samsung</td><td>4888</td><td>3</td></tr>
		<tr><td>4</td><td>meizu</td><td>3987</td><td>4</td></tr>
		<tr><td>5</td><td>xiaomi</td><td>2288</td><td>5</td></tr>
		</table>
    js_code:
		$("table").setTableColor("yellow", "purple");
*/

$.fn.setTableColor = function(c1, c2){
		this.find("tr:first").css("background-color", c1);
		this.find("tr:gt(0):odd").css("background-color", c2);
	}