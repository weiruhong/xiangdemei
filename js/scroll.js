$(function(){
    var explorer = window.navigator.userAgent ;
    var center = document.getElementsByClassName("center-con")[0];
//ie
    if (explorer.indexOf("MSIE") >= 0) {
        center.style.cssText="width: calc(100% + 20px);";
    }
//firefox
    else if (explorer.indexOf("Firefox") >= 0) {
        center.style.cssText="width: calc(100% + 20px);";
    }
//Chrome
    else if(explorer.indexOf("Chrome") >= 0){
        center.style.cssText="width:100%;";
    }
//Opera
    else if(explorer.indexOf("Opera") >= 0){
        center.style.cssText="width:100%;";
    }
//Safari
    else if(explorer.indexOf("Safari") >= 0){
        center.style.cssText="width:100%;";
    }
})
/*滚动条*/