var appInstance = getApp();
var WxParse     = require('../../components/wxParse/wxParse.js');
var util        = require('../../utils/util.js');

var pageData    = {
  data: {"picture1":{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:339.84375rpx;width:750rpx;margin-left:auto;margin-right:auto;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_589d5fbc0bfb9.jpg","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"page_form":"","compId":"picture1","parentCompid":"picture1"},"free_vessel2":{"type":"free-vessel","style":"width:750rpx;height:253.125rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;margin-top:23.4375rpx;opacity:1;margin-left:auto;","content":[{"type":"text","style":"background-color:rgb(255, 255, 255);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:28.125rpx;height:44.53125rpx;width:679.6875rpx;line-height:49.21875rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;left:37.5rpx;top:30.46875rpx;margin-right:0;position:absolute;","content":"        只有一个人也想打球？那怎么才能尽快找到打球的同道中人？约个球呢？不光是新人，不少老司机打了几年球还是无法掌握约球的正确姿势，在这里留下你的约球时间，来一场说约就约的比赛吧！","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"prePage"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel2","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":0,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/prePage\\\/prePage\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"","compId":"free_vessel2"},"bbs3":{"type":"bbs","style":"margin-top:23.4375rpx;margin-left:auto;","content":"","customFeature":{"mode":1,"ifBindPage":false,"ifLike":true},"animations":[],"page_form":"","compId":"bbs3","parentCompid":"bbs3"},"has_tabbar":0},
    need_login: false,
    page_router: 'page10005',
    page_form: 'none',
     
  prevPage:0,
      carouselGroupidsParams: [],
      relobj_auto: [],
      bbsCompIds: ["bbs3"],
     
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
  onShareAppMessage: function(){
    var pageRouter = this.page_router,
        pagePath = '/pages/'+pageRouter+'/'+pageRouter;

    
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
 
  UserCenterTurnToPage: function (e) {
    let router = e.currentTarget.dataset.router;
    let openVerifyPhone = e.currentTarget.dataset.openVerifyPhone; // 是否开启短信验证
    if(openVerifyPhone){
      if(!appInstance.getUserInfo().phone) {
        appInstance.turnToPage('/pages/bindCellphone/bindCellphone', true);
      } else {
        appInstance.turnToPage('/pages/' + router + '/' + router +'?from=userCenterEle');
      }
    } else {
      appInstance.turnToPage('/pages/' + router + '/' + router +'?from=userCenterEle');
    }
  },
  turnToGoodsDetail: function (e) {
    let id = e.currentTarget.dataset.id;
    let contact = e.currentTarget.dataset.contact;
    let goodsType = e.currentTarget.dataset.goodsType;
    switch(+goodsType){
      case 0:
      case 1: appInstance.turnToPage('/pages/goodsDetail/goodsDetail?detail=' + id +'&contact=' + contact);
        break;
      case 3: appInstance.turnToPage('/pages/toStoreDetail/toStoreDetail?detail=' + id);
        break;
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
