var appInstance = getApp();
var WxParse     = require('../../components/wxParse/wxParse.js');
var util        = require('../../utils/util.js');

var pageData    = {
  data: {"picture1":{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:339.84375rpx;width:750rpx;margin-left:auto;margin-right:auto;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_589d5fbc64b65.jpg","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"page_form":"","compId":"picture1","parentCompid":"picture1"},"free_vessel2":{"type":"free-vessel","style":"width:750rpx;height:405.46875rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;margin-top:23.4375rpx;opacity:1;margin-left:auto;","content":[{"type":"text","style":"background-color:rgb(255, 255, 255);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(68, 68, 68);font-size:32.8125rpx;height:44.53125rpx;width:679.6875rpx;line-height:49.21875rpx;margin-left:auto;margin-top:0;opacity:1;text-align:center;left:35.15625rpx;top:23.4375rpx;margin-right:0;position:absolute;","content":" 2017年暑假青少年羽毛球培训招生","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"prePage"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel2","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":0,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/prePage\\\/prePage\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgb(255, 255, 255);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:28.125rpx;height:44.53125rpx;width:679.6875rpx;line-height:49.21875rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;left:35.15625rpx;top:138.28125rpx;margin-right:0;position:absolute;","content":"时间：2017.7-9","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"prePage"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel2","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":1,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/prePage\\\/prePage\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgb(255, 255, 255);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:28.125rpx;height:44.53125rpx;width:679.6875rpx;line-height:49.21875rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;left:35.15625rpx;top:84.375rpx;margin-right:0;position:absolute;","content":"地址：北京邮电大学体育馆","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"prePage"},"animations":[],"compId":"data.content[2]","parentCompid":"free_vessel2","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":2,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/prePage\\\/prePage\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgb(255, 255, 255);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:28.125rpx;height:44.53125rpx;width:679.6875rpx;line-height:49.21875rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;left:23.4375rpx;top:189.84375rpx;margin-right:0;position:absolute;","content":"  费用：100元","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"prePage"},"animations":[],"compId":"data.content[3]","parentCompid":"free_vessel2","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":3,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/prePage\\\/prePage\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgb(255, 255, 255);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:28.125rpx;height:44.53125rpx;width:679.6875rpx;line-height:49.21875rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;left:37.5rpx;top:241.40625rpx;margin-right:0;position:absolute;","content":"电话：18401696164","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"prePage"},"animations":[],"compId":"data.content[4]","parentCompid":"free_vessel2","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":4,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/prePage\\\/prePage\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"button","style":"background-color:rgb(23, 181, 134);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(255, 255, 255);font-size:28.125rpx;height:70.3125rpx;line-height:70.3125rpx;margin-left:auto;margin-right:0;margin-top:0;opacity:1;text-align:center;width:234.375rpx;position:absolute;left:37.5rpx;top:304.6875rpx;","content":"一键拨打","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5px","boxStyle":false,"boxX":"0","boxY":"0","action":"call","phone-num":"18401696164","inner-page-link":"prePage"},"animations":[],"compId":"data.content[5]","parentCompid":"free_vessel2","itemType":"button","itemParentType":"free-vessel","itemIndex":5,"eventParams":"{\"phone_num\":\"18401696164\"}","eventHandler":"tapPhoneCallHandler"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"","compId":"free_vessel2"},"title_ele3":{"type":"title-ele","style":"opacity:1;line-height:58.59375rpx;background-color:rgb(255, 255, 255);border-color:rgb(34, 34, 34);border-style:none;color:rgb(68, 68, 68);font-size:32.8125rpx;margin-left:auto;margin-right:auto;margin-top:23.4375rpx;","content":"详情","customFeature":{"mode":1,"markColor":"rgb(23, 181, 134)","boxColor":"#000","boxR":"5px","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"page_form":"","compId":"title_ele3","parentCompid":"title_ele3","markColor":"rgb(23, 181, 134)","mode":1},"free_vessel4":{"type":"free-vessel","style":"width:750rpx;height:442.96875rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;opacity:1;margin-left:auto;","content":[{"type":"text","style":"background-color:rgb(255, 255, 255);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:28.125rpx;height:44.53125rpx;width:679.6875rpx;line-height:49.21875rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;left:42.1875rpx;top:11.71875rpx;margin-right:0;position:absolute;","content":"招生对象：喜爱篮球的大学生(17-25岁.参加训练的学生应身体健康，患有心脏病等不适合参与篮球运动的疾病者，不得报名参加培训）。\n学习班：篮球技能提升训练营要求：初学者或有一定基础者。\n授课教练：具有青少年业余训练教练员注册证，并有长期教授青少年的经验\n训练地点：北京邮电大学体育馆","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"prePage"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel4","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":0,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/prePage\\\/prePage\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"","compId":"free_vessel4"},"has_tabbar":0},
    need_login: false,
    page_router: 'page10007',
    page_form: 'none',
     
  prevPage:0,
      carouselGroupidsParams: [],
      relobj_auto: [],
      bbsCompIds: [],
      dynamicVesselComps: [],
      
      onLoad: function (e) {
    ;
    appInstance.setPageUserInfo();
    if(e.detail){
      this.dataId = e.detail;
    }
    appInstance.checkLogin();

    this.suspensionBottom();
    this.getCartList();
    appInstance.globalData.urlLocationId = e.location_id;

  },
  dataInitial: function(){
    appInstance.dataInitial();
  },
 
  onShow: function(){
    var that = this;
    setTimeout(function(){
      appInstance.setPageUserInfo();
    });

    //用于判断当前页面是否需要验证手机号
    if (this.need_login && !appInstance.getUserInfo().phone) {
      appInstance.turnToPage('/pages/bindCellphone/bindCellphone', true);
    }
  },
  onReachBottom : function() {
    for(let i in this.data){
      if(/^bbs[\d]+$/.test(i)){
        appInstance.bbsScrollFuc(i);
      }
    }
  },
  tapPrevewPictureHandler:function(e){
    appInstance.tapPrevewPictureHandler(e);
  },
  suspensionBottom: function(){
    for (let i in this.data) {
      if(/suspension/.test(i)){
        let suspension = this.data[i],
            newdata = {};

        if(this.data.has_tabbar == 1){
          newdata[i + '.suspension_bottom'] = (+suspension.suspension_bottom - 56)*2.34;
        }else{
          newdata[i + '.suspension_bottom'] = (+suspension.suspension_bottom)*2.34;
        }
        this.setData(newdata);
      }
    }
  },
  pageScrollFunc: function (e) {
    let compid  = e.target.dataset.compid;
    let curpage = parseInt(e.target.dataset.curpage) + 1;
      if (this.prevPage !== curpage) {
          this.prevPage = curpage;
          appInstance.pageScrollFunc(compid, curpage);
      }
  },

 
  bbsInputComment: function(e){
    var dataset = e.target.dataset,
        comment = e.detail.value;
    appInstance.bbsInputComment(dataset, comment);
  },
  bbsInputReply: function(e){
    var dataset = e.target.dataset,
        comment = e.detail.value;
    appInstance.bbsInputReply(dataset, comment);
  },
  uploadBbsCommentImage: function(e){
    var dataset = e.currentTarget.dataset;
    appInstance.uploadBbsCommentImage(dataset);
  },
  uploadBbsReplyImage: function(e){
    var dataset = e.currentTarget.dataset;
    appInstance.uploadBbsReplyImage(dataset);
  },
  deleteCommentImage: function(e){
    var dataset = e.currentTarget.dataset;
    appInstance.deleteCommentImage(dataset);
  },
  deleteReplyImage: function(e){
    var dataset = e.currentTarget.dataset;
    appInstance.deleteReplyImage(dataset);
  },
  bbsPublishComment: function(e){
    var dataset = e.currentTarget.dataset;
    appInstance.bbsPublishComment(dataset);
  },
  clickBbsReplyBtn: function(e){
    var dataset = e.currentTarget.dataset;
    appInstance.clickBbsReplyBtn(dataset);
  },
  bbsPublishReply: function(e){
    var dataset = e.currentTarget.dataset;
    appInstance.bbsPublishReply(dataset);
  },
  keywordList:{},

  
 
  tapInnerLinkHandler: function(event) {
    appInstance.tapInnerLinkHandler(event);
  },
  tapPhoneCallHandler: function(event) {
    appInstance.tapPhoneCallHandler(event);
  },
  tapRefreshListHandler: function(event) {
    var _this = this;
    appInstance.tapRefreshListHandler(event, _this);
  },
 
  
  stopPropagation: function(){},
 
  
};
Page(pageData);
