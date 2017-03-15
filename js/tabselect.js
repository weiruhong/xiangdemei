(function($){
    $.getUrlParam=function(name){
      var reg= new RegExp("(^|&)"+name +"=([^&]*)(&|$)");
      var r= window.location.search.substr(1).match(reg);
      if (r!=null) return unescape(r[2]); return null;
    }
  })(jQuery);
  var cid=$.getUrlParam('id');
  var num=$.getUrlParam('list');
$(function(){
    /*滚动条*/
    var oDiv =  document.getElementsByClassName("center-con");
    var explorer = window.navigator.userAgent ;
    for(var i=0;i<oDiv.length;i++){
        //ie
        if (explorer.indexOf("MSIE") >= 0) {
            oDiv[i].style.cssText="width: calc(100% + 20px);";
        }
//firefox
        else if (explorer.indexOf("Firefox") >= 0) {
            oDiv[i].style.cssText="width: calc(100% + 20px);";
        }
//Chrome
        else if(explorer.indexOf("Chrome") >= 0){
            oDiv[i].style.cssText="width:100%;";
        }
//Opera
        else if(explorer.indexOf("Opera") >= 0){
            oDiv[i].style.cssText="width:100%;";
        }
//Safari
        else if(explorer.indexOf("Safari") >= 0){
            oDiv[i].style.cssText="width:100%;";
        }
    }
    /*滚动条*/
})
