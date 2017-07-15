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
<h2><strong>项目演示</strong></h2>
<ul>
 	<li>项目演示可放视频链接或二维码，推荐腾讯视频哦，适合在微信里传播。</li>
 	<li>web类项目，可以利用github的项目演示功能，创建在线链接，方法参照：<a href="http://www.tuicool.com/articles/Z7nMva" target="_blank">如何在github上创建个人项目的在线演示demo</a></li>
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
