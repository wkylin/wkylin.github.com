//判断模拟器，以及手机系统
var isSML = (window.navigator.platform=='Win32')?1:0; /*是否在模拟器上运行, 1是0否*/
var android = window.navigator.userAgent.indexOf('Android'); /*是否在Android系统上运行, (android>=0)是*/

//打开新窗口
//function open_new(name,url,anim)
//{
//	uexWindow.open(name,'0',url, anim, '','', '0');
//}

//关闭窗口
function winClose(n){
	uexWindow.close(n);
}

//与主窗口通讯，wn窗口名字, scr指定窗口需要运行的一段js代码
function uescript(wn, scr){
	uexWindow.evaluateScript(wn,'0',scr);
}

/*主窗口执行浮动窗口JS脚本 wn主窗口名字 pn浮动窗口名字 scr执行的方法*/ 
function ueppscript(wn, pn, scr){
	uexWindow.evaluatePopoverScript(wn,pn,scr);
}

//调用接口错误处理
function getJSONError(err){
	if(err.message == 'network error!')
		toast('0','请检查网络状态','2500');
	else if(err.message == 'json parse failed!')
		toast('0','数据解析错误','2500');
	else if(err.message == 'file does not exist!')
		toast('0','文件不存在','2500');
	else if(err.message == 'read file failed!'){
		toast('0','文件读取错误','2500');
	}else
		toast('0','发现未知错误','2500');
}

//获取元素 
function $$(id){
	return document.getElementById(id);
}

//打印log
function logs(s){
	if(s.length > 10240) return;
	uexLog.sendLog(s);
}

//提示
function toast(type,str,times){
		uexWindow.toast(type, '5', str, times);
}

//关闭提示
function closeToast(){
	uexWindow.closeToast();
}

//设置元素的值
function setHtml(id, html) {
	if ("string" == typeof(id)) {
		var ele = $$(id);
		if (ele != null) {
			ele.innerHTML = html == null ? "" : html;
		}
	} else if (id != null) {
		id.innerHTML = html == null ? "" : html;
	}
}

//alert提示
function alert(msg){
	uexWindow.alert("提示",msg,"确定");
}

//本地存储
var lcstor = window.localStorage;
function setStorage(key,value){
	if(lcstor)
		lcstor[key] = value;
	else
		alert('localStorage error');
}
function getStorage(key){
	if(lcstor){
		for(i in lcstor){
			if(i==key)
				return lcstor[i];
		}
	}else
		alert('localStorage error');
}
function clearStorage(key){
	if(lcstor){
		if(key)
			lcstor.removeItem(key);
		else
			lcstor.clear();
	}
	else
		alert('localStorage error');
}


//刷新效果
function initBounce(funcTop, funcBottom){
	uexWindow.setBounce("1");
	if(!funcTop && !funcBottom){
		uexWindow.showBounceView("0","rgba(255,255,255,0)","0");
		uexWindow.showBounceView("1","rgba(255,255,255,0)","0");
		return;
	}
	var top = 0,btm = 1;
	uexWindow.onBounceStateChange = function(type,state){	
		if(type==top && state == 2){				//顶部弹动
			funcTop();
		}
		if(type==btm && state == 2){				//底部弹动
			funcBottom();
		}
	}
	if(funcTop){
		uexWindow.setBounceParams('0',"{'pullToReloadText':'下拉刷新','releaseToReloadText':'释放刷新','loadingText':'正在刷新，请稍候'}");
		uexWindow.showBounceView(top,"rgba(255,255,255,0)",1);
		uexWindow.notifyBounceEvent(top,1);	
	}
	if(funcBottom){
		uexWindow.setBounceParams('1',"{'pullToReloadText':'加载更多','releaseToReloadText':'加载更多','loadingText':'加载中，请稍候'}");
		uexWindow.showBounceView(btm,"rgba(255,255,255,0)",1);//设置弹动位置及效果([1:显示内容;0:不显示])
		uexWindow.notifyBounceEvent(btm,1);		//注册接收弹动事件([0:不接收onBounceStateChange方法回调;1:接收])
	}
}


