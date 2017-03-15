$(function(){
    /*按钮*/
    var $btn = $(".left-btn");
    var $left = $(".con-left");
    $btn.click(function(){
        $left.toggleClass("active");
        $(".zhezhao").animate({width:"toggle"})
        $(".nav").animate({height:"toggle"})
    })
    /*加号*/
    var box=$(".jia");
    box.click(function(){
        $(this).toggleClass("revolve");
        $(".icon-con").animate({height:"toggle"})
    })
    /*加号*/

    /*video导航*/
    var lis = $(".video-header>li");
    lis.click(function(){
        var index = $(this).index();
        lis.removeClass("hot").eq(index).addClass("hot")
    })
    /*video导航*/

    /*展览*/
    var zList = $(".zl-list>li");
    var zZC = $(".zl-zhong-con>li");
    zList.click(function(){
        var index = $(this).index();
        zZC.css("display","none").eq(index).css("display","block");
        zList.removeClass("zl-list-hot").eq(index).addClass("zl-list-hot");
    })
    /*展览*/


})
/*小于768时使用rem*/
new function (){
    var _self = this;
    _self.width = 640;//设置默认最大宽度
    _self.fontSize = 100;//默认字体大小
    _self.widthProportion = function(){
        var p = (document.body&&
            document.body.clientWidth ||
            document.getElementsByTagName("html")[0].offsetWidth)/_self.width;
        return p>1?1:p<0.5?0.5:p;
    };
    _self.changePage = function(){
        document.getElementsByTagName("html")[0].setAttribute("style","font-size:"+_self.widthProportion()*_self.fontSize+"px !important");
    }
    _self.changePage();
    window.addEventListener("resize",function(){_self.changePage();},false);
};
/*小于768时使用rem*/


