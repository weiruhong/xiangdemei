(function($){
    $.getUrlParam=function(name){
      var reg= new RegExp("(^|&)"+name +"=([^&]*)(&|$)");
      var r= window.location.search.substr(1).match(reg);
      if (r!=null) return unescape(r[2]); return null;
    }
  })(jQuery);
  var cid=$.getUrlParam('id');
  var num=$.getUrlParam('list');
