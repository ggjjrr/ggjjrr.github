
window.onresize=function () {
   var W=window.innerWidth
    console.log(W);
   if(W<993){
       $(".header ul").hide()
       $(".header .line").show()
   }else{
       $(".header ul").show()
       $(".header .line").hide()
       $(".header .content").css('display','none')
       $(".cha").css('display','none')
   }
}


var H=100
console.log(H);

window.onscroll=function () {
    var TOP=$(window).scrollTop()
    console.log(TOP);
    if (TOP>H){
        $(".header").css({
            position:'fixed',
            top:0
        })
    }
    else{
        $(".header").css({
            position:'static',

        })
    }
}
$(".content3 .cover1").mouseenter(function () {
    $(this).siblings(".cover").stop().slideToggle(700)
    $(this).parent().siblings().children(".cover").stop().css({
        display:'none'
    })
})

    $(".content3 .cover1").mouseleave(function () {
        $(this).siblings('.cover').slideUp()
    });



var num=1
function f1() {
    $(".header .content").slideUp(200)
    $(".header .line").css('display','block')
    $(".cha").css('display','none')
}
function f2() {
    $(".header .content").css('display','block')
        $(".header .line").css('display','none')
    $(".cha").css('display','block')
}
$(".header .line").click(function () {
    f2()
//     if (num==1) {
//         f2()
//         num=2;
//
//     }
//     else if (num==2){
//         f1();
//         num=1
//     }
});

$(".cha").click(function () {
    f1()
})



