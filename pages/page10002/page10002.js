var appInstance = getApp();
var WxParse     = require('../../components/wxParse/wxParse.js');
var util        = require('../../utils/util.js');

var pageData    = {
  data: {"carousel1":{"type":"carousel","style":"height:339.84375rpx;margin-left:auto;margin-right:auto;margin-top:0;opacity:1;","content":[{"customFeature":[],"pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_589d5fbbe0d76.jpg","content":"","parentCompid":"carousel1","style":""},{"customFeature":[],"pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_589d600546ab1.jpg","content":"","parentCompid":"carousel1","style":""}],"customFeature":{"autoplay":true,"interval":2},"animations":[],"page_form":"","compId":"carousel1"},"title_ele2":{"type":"title-ele","style":"opacity:1;line-height:58.59375rpx;background-color:rgb(243, 243, 243);border-color:rgb(34, 34, 34);border-style:none;color:#666;font-size:32.8125rpx;margin-left:auto;margin-right:auto;text-align:center;","content":"近期活动","customFeature":{"mode":"0","markColor":"rgb(26, 147, 223)","boxColor":"#000","boxR":"5px","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"page_form":"","compId":"title_ele2","parentCompid":"title_ele2","markColor":"rgb(26, 147, 223)","mode":0},"picture3":{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:339.84375rpx;width:750rpx;margin-left:auto;margin-right:auto;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_589d5fbc0bfb9.jpg","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10005"},"animations":[],"page_form":"","compId":"picture3","parentCompid":"picture3","itemType":"picture","itemParentType":null,"itemIndex":"picture3","eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10005\\\/page10005\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},"picture4":{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:339.84375rpx;width:750rpx;margin-left:auto;margin-right:auto;margin-top:23.4375rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/thumb\/t_1499090630595a4ec6a5d66.jpg","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10006"},"animations":[],"page_form":"","compId":"picture4","parentCompid":"picture4","itemType":"picture","itemParentType":null,"itemIndex":"picture4","eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10006\\\/page10006\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},"picture5":{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:339.84375rpx;width:750rpx;margin-left:auto;margin-right:auto;margin-top:23.4375rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_589d5fbc64b65.jpg","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10007"},"animations":[],"page_form":"","compId":"picture5","parentCompid":"picture5","itemType":"picture","itemParentType":null,"itemIndex":"picture5","eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10007\\\/page10007\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},"has_tabbar":1},
    need_login: false,
    page_router: 'page10002',
    page_form: 'none',
  prevPage:0,
      carouselGroupidsParams: [],
      relobj_auto: [],
      bbsCompIds: [],
      onLoad: function (e) {
    this.setData({
      
    });
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
