/*滚动条*/
$(function(){
    var center = document.getElementsByClassName("center-con")[0];
    if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){
        center.style.cssText="width: calc(100% + 20px);";
    }
    if(isIE=navigator.userAgent.indexOf("Firefox")>0){
        center.style.cssText="width: calc(100% + 20px);";
    }
    if(isSafari=navigator.userAgent.indexOf("Safari")>0) {
        center.style.cssText="width:100%;";
    }
})
/*滚动条*/