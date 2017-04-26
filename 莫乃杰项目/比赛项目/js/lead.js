
$(".index-des img").css({
    "margin-top":"50px",
    "opacity":"0",
    "filter":"alpha(opacity=0)"
}).animate({"width":"600px","height":"140px","opacity":"1","filter":"alpha(opacity=100)"},1500,function(){
    $(this).animate({"margin-top":"-150px"},1000)
})
/*.animate({
    "margin-top":"-70px",
    "opacity":"1",
    "filter":"alpha(opacity=100)"
},1000);*/
setTimeout(function(){
    window.location.href = "index.html";    //修改这里，跳转到首页
        },3500)
   