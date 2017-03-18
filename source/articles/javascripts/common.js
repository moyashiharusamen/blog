var MOYASHI = MOYASHI || {};

MOYASHI.LINK = {
  init : function(){
    this.bindEvent();
  },
  bindEvent : function(){
    $('a[href^="http://"], a[href^="https://"]').attr('target', '_blank');
  }
}

MOYASHI.HUMBERGER = {
  init : function() {
    this.setParameters();
    this.bindEvent();
  },
  setParameters : function() {
    this.$trigger = $('.js-menu-btn');
    this.$header = $('.js-header-list');
  },
  bindEvent : function() {
    var self = this;
    this.$trigger.on('click',function(e) {
      e.preventDefault();
      $(this).toggleClass('active');
      self.$header.fadeToggle(100);
    })
  }
}

$(function(){
  MOYASHI.LINK.init();
  MOYASHI.HUMBERGER.init();
})
