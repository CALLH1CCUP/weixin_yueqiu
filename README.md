<ul>
 	<li>
<h1>实验目标</h1>
实现手机端北邮体育馆的约球小程序，方便喜欢羽毛球的同学相约打球。</li>
 	<li>
<h1>实验原理</h1>
利用js，html5,css编写程序主体，java搭建服务器</li>
 	<li>
<h2><strong>需求分析</strong></h2>
1.许多爱好羽毛球的同学没有约球交友的机会</li>
 	<li>2.学校体育馆可以利用的更加充分</li>
 	<li>
<h2></h2>
<h2><strong>目标</strong></h2>
<ol>
 	<li>
<p class="reader-word-layer reader-word-s3-15">基本要求：完成总体板块的设计，外观模型设计达到美观</p>
</li>
 	<li>
<p class="reader-word-layer reader-word-s3-15">开发目标：能够掌握获取地点定位，制作能够发表言论图片的小型论坛，实现微信用户能够注册</p>
</li>
 	<li>
<p class="reader-word-layer reader-word-s3-15">应用目标：两人能够通过论坛进行交流约球</p>
</li>
</ol>
<h2><strong>总体设计</strong></h2>
<h1>系统业务流程及描述（可以流程图的方式呈现）</h1>
<img class="alignnone size-medium wp-image-5029" src="http://112.74.62.56/wp-content/uploads/2017/07/1-300x146.jpg" alt="" width="300" height="146" /></li>
 	<li>
<h1></h1>
<h2><strong>详细设计（使用步骤）</strong></h2>
<h2></h2>
<h1>1.主页</h1>
<h1><img class="alignnone wp-image-9876 size-full" src="http://112.74.62.56/wp-content/uploads/2017/07/1-4.png" alt="" width="327" height="554" /></h1>
主页中显示了预约场地功能和咨询详情，两个图片分别链接到打电话功能与咨询详情页面，下方是一个悬浮bar</li>
</ul>
&nbsp;
<ul>
 	<li><img class="alignnone wp-image-10528 size-full" src="http://112.74.62.56/wp-content/uploads/2017/07/打电话.png" alt="" width="321" height="555" /><img class="alignnone wp-image-10529 size-full" src="http://112.74.62.56/wp-content/uploads/2017/07/咨询详情.png" alt="" width="322" height="549" /></li>
</ul>
<h1>2.活动页面</h1>
<ul>
 	<li>下面展示活动页面，里面有三个板块，约球论坛，近期比赛，训练营。</li>
 	<li>其中约球吧是我们实现的一个小型论坛，球友可以在里面进行交流，回复，点赞，发表情包等</li>
 	<li>迎新杯是我们拟设定的一个比赛，自行编辑的虚拟的，以后可以联系现实进行更新</li>
 	<li>训练营也是我们提供的一个功能，同样是拟设定的，提供电话咨询</li>
</ul>
&nbsp;

<img class="alignnone wp-image-10536 size-full" src="http://112.74.62.56/wp-content/uploads/2017/07/活动页面.png" alt="" width="319" height="555" /> <img class="alignnone wp-image-10537 size-full" src="http://112.74.62.56/wp-content/uploads/2017/07/约球吧.png" alt="" width="321" height="547" /> <img class="alignnone wp-image-9881 size-full" src="http://112.74.62.56/wp-content/uploads/2017/07/6-1.png" alt="" width="322" height="546" /><img class="alignnone wp-image-10539 size-full" src="http://112.74.62.56/wp-content/uploads/2017/07/迎新杯.png" alt="" width="322" height="547" />
<h1>3.场馆位置</h1>
<ul>
 	<li>利用腾讯提供的地图定位API，指定地点api显示北邮场馆的具体位置，方便大家找到<img class="alignnone wp-image-9878 size-full" src="http://112.74.62.56/wp-content/uploads/2017/07/3-4.png" alt="" width="319" height="555" /></li>
</ul>
<h1>4.个人信息</h1>
<ul>
 	<li>微信登录，可以改名字，绑定手机，提供论坛回复的通知</li>
 	<li>
<h1><img class="alignnone wp-image-9879 size-full" src="http://112.74.62.56/wp-content/uploads/2017/07/4-3.png" alt="" width="322" height="551" />  <img class="alignnone wp-image-10541 size-full" src="http://112.74.62.56/wp-content/uploads/2017/07/个人信息更改.png" alt="" width="321" height="544" /> <img class="alignnone wp-image-10542 size-full" src="http://112.74.62.56/wp-content/uploads/2017/07/回复.png" alt="" width="320" height="552" /> <img class="alignnone wp-image-10543 size-full" src="http://112.74.62.56/wp-content/uploads/2017/07/手机绑定.png" alt="" width="320" height="547" /></h1>
<h2><strong>功能实现</strong></h2>
</li>
 	<li>来电咨询</li>
 	<li>消息提醒</li>
 	<li>场馆定位</li>
 	<li>论坛互动</li>
 	<li>用户注册</li>
 	<li>活动显示
<h2>项目部分代码</h2>
</li>
 	<li>绑定手机部分代码
<pre>var app = getApp()

var util = require('../../utils/util.js')

Page({

 data: {

 hideVerifyPhone: true,

 hideBindNewPhone: true,

 oldCode: '',

 oldCodeBtnDisabled: false,

 oldCodeStatus: '获取验证码',

 nextStepDisabled: false,

 newPhone: '',

 newCode: '',

 newCodeBtnDisabled: false,

 newCodeStatus: '获取验证码',

 bindNewPhoneBtnDisabled: false,

 codeInterval: 60

 },

 onLoad: function(){

 var userInfo = app.getUserInfo();

 if(userInfo.phone){

 this.setData({

 hideVerifyPhone: false

 })

 } else {

 this.setData({

 hideBindNewPhone: false

 })

 }

 },

 sendCodeToOldPhone: function(){

 var that = this;

 if(this.data.oldCodeBtnDisabled){

 return;

 }

 this.setData({

 oldCodeStatus: '正在发送...',

 oldCodeBtnDisabled: true

 })

 app.sendRequest({

 url: '/index.php?r=AppData/PhoneCode',

 success: function(){

 var second = that.data.codeInterval,

 interval;

 app.showToast({

 title: '已发送',

 icon: 'success'

 })

 interval = setInterval(function(){

 if(second &lt; 0) {

 clearInterval(interval);

 that.setData({

 oldCodeStatus: '获取验证码',

 oldCodeBtnDisabled: false

 })

 } else {

 that.setData({

 oldCodeStatus: second+'s',

 })

 second--;

 }

 }, 1000);

 },

 complete: function(){

 that.setData({

 oldCodeStatus: '获取验证码',

 oldCodeBtnDisabled: false

 })

 }

 })

 },

 inputOldCode: function(e){

 this.setData({

 oldCode: e.detail.value

 })

 },

 nextStep: function(){

 var that = this;

 if(!this.data.oldCode){

 app.showModal({

 content: '请输入验证码'

 })

 return;

 }

 if(this.data.nextStepDisabled){

 return;

 }

 this.setData({

 nextStepDisabled: true

 })

 app.sendRequest({

 url: '/index.php?r=AppData/VerifyPhone',

 method: 'post',

 data: {

 code: this.data.oldCode

 },

 success: function(){

 that.setData({

 hideVerifyPhone: true,

 hideBindNewPhone: false

 })

 },

 complete: function(){

 that.setData({

 nextStepDisabled: false

 })

 }

 })

 },

 inputPhone: function(e){

 this.setData({

 newPhone: e.detail.value

 })

 },

 inputNewCode: function(e){

 this.setData({

 newCode: e.detail.value

 })

 },

 sendCodeToNewPhone: function(){

 var that = this,

 newPhone = this.data.newPhone;

 wx.getStorage({

 key: 'session_key',

 success: function (res) {

 console.log(res);

 if (res.data == '' ) {

 app.showModal({

 content: '未获取授权，验证码获取失败！'

 })

 return;

 };

 }

 })

 if(!util.isPhoneNumber(newPhone)){

 app.showModal({

 content: '请输入正确的手机号码'

 })

 return;

 }

 if(this.data.newCodeBtnDisabled){

 return;

 }

 this.setData({

 newCodeStatus: '正在发送...',

 newCodeBtnDisabled: true

 })

 app.sendRequest({

 url: '/index.php?r=AppData/NewPhoneCode',

 method: 'post',

 data: {

 phone: newPhone

 },

 success: function(res){

 var second = that.data.codeInterval,

 interval;

 app.showToast({

 title: '已发送',

 icon: 'success'

 })

 interval = setInterval(function(){

 if(second &lt; 0) {

 clearInterval(interval);

 that.setData({

 newCodeStatus: '获取验证码',

 newCodeBtnDisabled: false

 })

 } else {

 that.setData({

 newCodeStatus: second+'s',

 })

 second--;

 }

 }, 1000);

 },

 complete: function(){

 that.setData({

 newCodeStatus: '获取验证码',

 newCodeBtnDisabled: false

 })

 }

 })

 },

 bindNewPhone: function(){

 var that = this,

 newPhone = this.data.newPhone,

 newCode = this.data.newCode;

 if(!newPhone || !newCode){

 return;

 }

 if(!util.isPhoneNumber(newPhone)){

 app.showModal({

 content: '请输入正确的手机号码'

 })

 return;

 }

 if(this.data.bindNewPhoneBtnDisabled){

 return;

 }

 this.setData({

 bindNewPhoneBtnDisabled: true

 })

 app.sendRequest({

 url: '/index.php?r=AppData/XcxVerifyNewPhone',

 mehtod: 'post',

 data: {

 phone: newPhone,

 code: newCode

 },

 success: function(res){

 app.setUserInfoStorage({

 phone: newPhone

 });

 app.showToast({

 title: '绑定成功',

 icon: 'success',

 success: function(){

 app.turnBack();

 }

 })

 },

 fail: function(res){

 app.showModal({

 content: '绑定失败'+ res.data

 })

 },

 complete: function(){

 that.setData({

 bindNewPhoneBtnDisabled: false

 })

 }

 })

 }

})</pre>
</li>
 	<li>微信登录功能
<pre>// 登录微信
 login: function(){
 var that = this;

wx.login({
 success: function(res){
 if (res.code) {
 that.sendCode(res.code);
 } else {
 console.log('获取用户登录态失败！' + res.errMsg)
 }
 },
 fail: function(res){
 console.log('login fail: '+res.errMsg);
 }
 })
 },
 checkLogin: function(){
 if(!this.getSessionKey()){
 this.sendSessionKey();
 } else {
 this.pageInitial();
 }
 },
 pageInitial: function(){
 this.getCurrentPage().dataInitial();
 },
 // 向服务器发送微信登录返回的code
 sendCode: function(code){
 var that = this;
 this.sendRequest({
 url: '/index.php?r=AppUser/onLogin',
 data: {
 code: code
 },
 success: function(res){
 if(res.is_login == 2) {
 that.globalData.notBindXcxAppId = true;
 }
 that.setSessionKey(res.data);
 that.requestUserInfo(res.is_login);
 that.pageInitial();
 },
 fail: function(res){
 console.log('sendCode fail');
 },
 complete: function(res){

}
 })
 },</pre>
</li>
 	<li>
<pre>地图功能var pageData = {

 data: {},

 onLoad: function (e) {

 console.log(e);

 var parsed_params = JSON.parse(e.eventParams);

 var new_marker = {};

 new_marker['markers'] = parsed_params;

 new_marker['longitude'] = parsed_params[0].longitude;

 new_marker['latitude'] = parsed_params[0].latitude;

 this.setData(new_marker);

 }

};

Page(pageData);</pre>
</li>
 	<li>站内信息
<pre>var app = getApp()

Page({
 data: {
 messageType: 5, // 5:默认展示系统消息列表
 systemBranch: {
 data: [],
 isMore: 0,
 currentPage: 1,
 onload: false,
 unreadCount: 0
 },
 interactBranch: {
 data: [],
 isMore: 0,
 currentPage: 1,
 onload: false,
 unreadCount: 0
 },
 /*
 xxxBranch 对象
 data: 对应分支的数据
 isMore: 是否拥有更多的新的数据
 currentPage: 当前已经加载到页数
 onload: 是否处在数据加载中， true加载中，false加载完毕
 */
 messageDetail: 0, // 控制是否展开 0:不展示消息详情页 3:展示表单详情页
 messageDetailFormData: [] //消息详情页：表单数据
 },
 onLoad: function(){
 this.getMessageData();
 },
 // 获取数据
 getMessageData: function(type, page){
 let that = this;
 app.sendRequest({
 url: '/index.php?r=AppNotify/GetUserAppNotifyMsg',
 data: {
 'app_id': app.globalData.appId,
 'types': type || '',
 'page': page || ''
 },
 success: function(res){
 for(var key in res.data){
 switch(parseInt(key)){
 
 // 互动消息分支：评论消息
 case 6:
 that.setData({
 'interactBranch.data': that.data.interactBranch.data ? that.data.interactBranch.data.concat(that.parseMessageData(res.data[key].data)) : that.parseMessageData(res.data[key].data) ,
 'interactBranch.isMore': res.data[key].is_more,
 'interactBranch.currentPage': res.data[key].current_page,
 'interactBranch.onload': false,
 'interactBranch.unreadCount': res.data[key].unread_count
 })
 break;
 }
 }
 }
 });
 },
 // 解析数据
 parseMessageData: function(data){
 let array = [];
 let contentJson;
 let item;
 for (var i = 0; i &lt; data.length; i++) {
 switch(parseInt(data[i].type)){
 // 站内消息
 case 1:
 contentJson = data[i].content &amp;&amp; JSON.parse(data[i].content);
 item = {};
 item.messageType = parseInt(data[i].type);
 item.className = 'type-system';
 item.messageTitle = contentJson.title;
 item.messageTime = data[i].add_time;
 item.messageImg = contentJson.pic;
 item.messageContent = contentJson.description;
 item.messagePageUrl = data[i].page_url;
 array.push(item);
 break;
 
 // 评论消息
 case 4:
 item = {};
 item.messageType = parseInt(data[i].type);
 item.className = 'type-comment';
 item.messageTitle = '评论消息';
 item.messageTime = data[i].add_time;
 item.messageImg = 'icon-message-comment';
 item.messageContent = data[i].content + ' 回复了你的话题';
 array.push(item);
 break;
 case 8:
 item = {};
 item.messageType = parseInt(data[i].type);
 item.className = 'type-Administrators';
 item.messageTitle = '管理员通知';
 item.messageTime = data[i].add_time;
 item.messageImg = 'icon-notify';
 item.messageContent = data[i].content;
 array.push(item);
 }
 }
 return array;
 },
 // 底部触发是否获取数据
 checkMoreMessageData: function(event){
 let that = this;
 let targetId = event.target.id;
 switch(targetId) {
 case 'myMessage-system-message':
 // 有更多数据 并且 不在加载中时 执行
 if ((that.data.systemBranch.isMore != 0 ) &amp;&amp; ( !that.data.systemBranch.onload)) {
 that.getMessageData(5, (that.data.systemBranch.currentPage + 1));
 that.setData({
 'systemBranch.onload': true
 });
 }
 break;
 case 'myMessage-interact-message':
 // 有更多数据 并且 不在加载中时 执行
 if ((that.data.interactBranch.isMore != 0 ) &amp;&amp; ( !that.data.interactBranch.onload)) {
 that.getMessageData(6, (that.data.interactBranch.currentPage + 1));
 that.setData({
 'interactBranch.onload': true
 });
 }
 break;
 }
 },
 // 切换显示的消息类型
 changeMessageType: function(event){
 if(event.target.dataset.messageType == 6) {
 this.setData({
 'interactBranch.unreadCount': 0
 });
 }
 this.setData({
 messageType: event.target.dataset.messageType
 });
 },
 // 站内消息：跳转页面
 jumpToPage: function(event){
 let router = event.currentTarget.dataset.pageUrl;
 let url = '/pages/' + router + '/' + router;

app.turnToPage(url, true);
 },
 // 表单消息：查看表单详情
 showMessageDetailForm: function(event){
 let that = this;
 let _form = event.currentTarget.dataset.form;
 let _formId = event.currentTarget.dataset.formId;
 let _formDataId = event.currentTarget.dataset.formDataId;
 let _formData_list = []; // 该表单对应的字段详情数组
 // 设置页面标题
 app.setPageTitle('表单消息');
 // 请求数据
 app.sendRequest({
 url: '/index.php?r=pc/WebAppMgr/getForm',
 data: {
 'app_id': app.globalData.appId,
 'form_id': _formId,
 },
 success: function(res){
 _formData_list = res.data.field_arr;
 _formData_list.shift(); // 默认去除第一个（非用户创建）
 // 获取该表单的本次提交数据
 app.sendRequest({
 url: '/index.php?r=AppData/getFormData',
 data: {
 'app_id': app.globalData.appId,
 'form': _form,
 'data_id': _formDataId,
 },
 success: function(res){
 let _array = []; // 临时存放表单提交详情的显示数据
 let _form_data = res.data["0"].form_data;
 for(var key in _form_data) {
 // 匹配对应的字段数据对象
 let _index = -1; // 判断改表单提交详情对应在字段详情数组的位置
 for (var i = 0; i &lt; _formData_list.length; i++) {
 if (_formData_list[i]['field'] == key) {
 _index = i;
 }
 }
 if(_index == -1) continue;

// 匹配对应类型，并将对应数据_item放入_array
 let _item = {}; // 临时存放
 switch(parseInt(_formData_list[_index]['type'])) {
 // 文本
 case 1:
 _item = {};
 _item.dataType = 1;
 _item.dataName = _formData_list[_index]['name'];
 _item.dataContent = _form_data[key];
 _array.push(_item);
 break;
 // 图片
 case 2:
 _item = {};
 _item.dataType = 2;
 _item.dataName = _formData_list[_index]['name'];
 _item.dataContent = _form_data[key];
 _array.push(_item);
 break;
 // 富文本
 case 3:
 _item = {};
 _item.dataType = 3;
 _item.dataName = _formData_list[_index]['name'];
 _item.dataContent = '富文本类型';
 _array.push(_item);
 break;
 }
 _index++;
 }
 that.setData({
 'messageDetail': 3,
 'messageDetailFormData': _array
 });
 }
 });
 }
 });
 },
 
})</pre>
</li>
 	<li>
<h2></h2>
<h2></h2>
<h2></h2>
<h2></h2>
<h2></h2>
<h2></h2>
<h2><strong>项目演示</strong></h2>
<ul>
 	<li>项目演示链接http://www.17sysj.com/video/lpds_2be876e68610b</li>
 	<li>Github链接https://github.com/CALLH1CCUP/weixin_yueqiu</li>
</ul>
<h2><strong>团队故事</strong></h2>
<table style="height: 180px; border-color: #d8d8d8; background-color: #f9f9f9; width: 454px;" border="1" cellspacing="0" cellpadding="5px">
<tbody>
<tr style="height: 24px;">
<td style="width: 80px; height: 24px;"><strong>姓名</strong></td>
<td style="width: 289px; height: 24px;"><strong>职责</strong></td>
</tr>
<tr style="height: 24px;">
<td style="width: 80px; height: 24px;">张凯</td>
<td style="width: 289px; height: 24px;">技术担当，资源协调</td>
</tr>
<tr style="height: 24px;">
<td style="width: 80px; height: 24px;">张克勤</td>
<td style="width: 289px; height: 24px;">bug调试，创意思路</td>
</tr>
</tbody>
</table>
<h1>团队联系方式：</h1>
</li>
 	<li>
<h1>张凯QQ:1965835569</h1>
</li>
 	<li>
<h1>张克勤QQ:708984926</h1>
</li>
</ul>
