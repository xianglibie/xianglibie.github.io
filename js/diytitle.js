//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        //离开当前页面时标签显示内容
        document.title = 'w(ﾟДﾟ)w';
        clearTimeout(titleTime);
    }
    else {
        //返回当前页面时标签显示内容
        document.title = '♪(^∇^*)欢迎回来！' + OriginTitile;
        //两秒后变回正常标题
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 2000);
    }
});
//禁用F12
document.onkeydown = function () {
  if (window.event && window.event.keyCode == 123) {
    event.keyCode = 0;
    event.returnValue = false;
    new Vue({
      data:function(){
        this.$notify({
          title:"你在干嘛！",
          message:"怎么能随随便便耍流氓呢？",
          position: 'bottom-right',
          offset: 50,
          showClose: false,
          type:"error"
        });
        return{visible:false}
      }
    })
    return false;
  }
};