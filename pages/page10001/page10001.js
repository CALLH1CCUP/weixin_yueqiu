var appInstance = getApp();
var WxParse     = require('../../components/wxParse/wxParse.js');
var util        = require('../../utils/util.js');

var pageData    = {
  data: {"carousel1":{"type":"carousel","style":"height:499.21875rpx;margin-left:auto;margin-right:auto;margin-top:0;opacity:1;","content":[{"customFeature":[],"pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_589c298e69392.jpg","content":"","parentCompid":"carousel1","style":""},{"customFeature":[],"pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_589c297fcea77.jpg","content":"","parentCompid":"carousel1","style":""}],"customFeature":{"autoplay":true,"interval":2,"carouselgroupId":null},"animations":[],"page_form":"","compId":"carousel1"},"button2":{"type":"button","style":"background-color:rgb(23, 181, 134);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(255, 255, 255);font-size:32.8125rpx;height:70.3125rpx;line-height:70.3125rpx;margin-left:auto;margin-right:auto;opacity:1;text-align:center;width:750rpx;","content":"咨询电话：18401696164（点击拨打）","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5px","boxStyle":false,"boxX":"0","boxY":"0","action":"call","phone-num":"18401696164","segment":"","ifMust":true},"animations":[],"page_form":"","compId":"button2","parentCompid":"button2","itemType":"button","itemParentType":null,"itemIndex":"button2","eventParams":"{\"phone_num\":\"18401696164\"}","eventHandler":"tapPhoneCallHandler"},"title_ele3":{"type":"title-ele","style":"opacity:1;line-height:70.3125rpx;background-color:rgb(255, 255, 255);border-color:rgb(34, 34, 34);border-style:none;color:rgb(58, 74, 68);font-size:32.8125rpx;margin-left:auto;margin-right:auto;","content":"场馆介绍","customFeature":{"mode":0,"markColor":"rgb(26, 147, 223)","boxColor":"#000","boxR":"5px","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"page_form":"","compId":"title_ele3","parentCompid":"title_ele3","markColor":"rgb(26, 147, 223)","mode":0},"text4":{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(99, 104, 102);font-size:28.125rpx;height:44.53125rpx;width:689.0625rpx;line-height:46.875rpx;margin-left:35.15625rpx;opacity:1;text-align:left;","content":"一、场馆简介北邮体育馆是位于北京邮电大学校内的，场馆内有健身房，游泳馆，篮球馆，羽毛球馆等等，采光好、通风好。馆内环境优雅、舒适，设有男、女更衣室、淋浴间、卫生间、休息室、各类体育用品、超市、各品牌运动饮料。\n配套设备、设施一应俱全，先进专业的灯控系统 。还设有大型停车场，交通便利、出入方便。","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"page_form":"","compId":"text4","parentCompid":"text4","markColor":"","mode":0},"text5":{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(99, 104, 102);font-size:28.125rpx;height:44.53125rpx;width:689.0625rpx;line-height:46.875rpx;margin-left:35.15625rpx;margin-top:23.4375rpx;opacity:1;text-align:left;","content":"二、场地介绍： \n羽毛球标准场地6块，专业铺设（运动地板、高档比赛级地胶设计）. ","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"page_form":"","compId":"text5","parentCompid":"text5","markColor":"","mode":0},"text6":{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(99, 104, 102);font-size:28.125rpx;height:44.53125rpx;width:689.0625rpx;line-height:46.875rpx;margin-left:35.15625rpx;margin-top:23.4375rpx;opacity:1;text-align:left;","content":"三、地理位置：\n北京邮电大学体育馆","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"page_form":"","compId":"text6","parentCompid":"text6","markColor":"","mode":0},"text7":{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:32.8125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;","content":"      ","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"page_form":"","compId":"text7","parentCompid":"text7","markColor":"","mode":0},"has_tabbar":0},
    need_login: false,
    page_router: 'page10001',
    page_form: 'none',
      
  prevPage:0,
      carouselGroupidsParams: [],
      relobj_auto: [],
      bbsCompIds: [],
      
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
