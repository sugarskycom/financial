function vertical(){
    var dialog_h = $(".modal-content").height()+53;
    var window_h = $(window).height();
    var top = (window_h-dialog_h)/2;
    $(".modal-content").css('top',top);
}
/**
 * 刷新datatable当前页
 * 自动计算当前页码
 * 固定表格控件ID
 */
function pageChange(id)
{
	var dataTable;
	if(typeof(id) == "undefined")
		dataTable = $('#dataTables-dataList').dataTable();
	else	
		dataTable = $('#'+id).dataTable();

	var tableSetings=dataTable.fnSettings()  
	var paging_length=tableSetings._iDisplayLength;//当前每页显示多少  
	var page_start=tableSetings._iDisplayStart;//当前页开始  
	var page = m(page_start,paging_length);
	dataTable.fnPageChange(page);
}

Date.prototype.pattern = function(fmt) {
	var o = {
		"M+" : this.getMonth() + 1, //月份
		"d+" : this.getDate(), //日
		"h+" : this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时
		"H+" : this.getHours(), //小时
		"m+" : this.getMinutes(), //分
		"s+" : this.getSeconds(), //秒
		"q+" : Math.floor((this.getMonth() + 3) / 3), //季度
		"S" : this.getMilliseconds()
	//毫秒
	};
	var week = {
		"0" : "/u65e5",
		"1" : "/u4e00",
		"2" : "/u4e8c",
		"3" : "/u4e09",
		"4" : "/u56db",
		"5" : "/u4e94",
		"6" : "/u516d"
	};
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")
				.substr(4 - RegExp.$1.length));
	}
	if (/(E+)/.test(fmt)) {
		fmt = fmt
				.replace(
						RegExp.$1,
						((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f"
								: "/u5468")
								: "")
								+ week[this.getDay() + ""]);
	}
	for ( var k in o) {
		if (new RegExp("(" + k + ")").test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])
					: (("00" + o[k]).substr(("" + o[k]).length)));
		}
	}
	return fmt;
}

//时间格式化
function dateFormat(time,flag)
{
	if(time=="" || time == null || time==0) return '-';
	var date = new Date(parseInt(time)*1000);
	if(flag)
		return date.pattern('yyyy-MM-dd');
	else
		return date.pattern('yyyy-MM-dd hh:mm:ss');
}
function closeDialog()
{
	$.each(BootstrapDialog.dialogs, function(id, dialog){
            dialog.close();
    });
}

function table2Excel(o,filename){
	$(o).table2excel({
					//exclude: ".noExl",
					name: "Excel Document Name",
					filename: filename,
					fileext: ".xls",
					exclude_img: true,
					exclude_links: false,
					exclude_inputs: true
	});
}

var DX = function (num) {  
  var strOutput = "";  
  var strUnit = '仟佰拾亿仟佰拾万仟佰拾元角分';  
  num += "00";  
  var intPos = num.indexOf('.');  
  if (intPos >= 0)  
    num = num.substring(0, intPos) + num.substr(intPos + 1, 2);  
  strUnit = strUnit.substr(strUnit.length - num.length);  
  for (var i=0; i < num.length; i++)  
    strOutput += '零壹贰叁肆伍陆柒捌玖'.substr(num.substr(i,1),1) + strUnit.substr(i,1);  
    return strOutput.replace(/零角零分$/, '整').replace(/零[仟佰拾]/g, '零').replace(/零{2,}/g, '零').replace(/零([亿|万])/g, '$1').replace(/零+元/, '元').replace(/亿零{0,3}万/, '亿').replace(/^元/, "零元");  
};