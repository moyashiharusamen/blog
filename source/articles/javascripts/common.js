var MOYASHI = MOYASHI || {};

MOYASHI.LINK = {
  init : function(){
    this.bindEvent();
  },
  bindEvent : function(){
    $('a[href^="http://"], a[href^="https://"]').attr('target', '_blank');
  }
}

$(function(){
  MOYASHI.LINK.init();
})
