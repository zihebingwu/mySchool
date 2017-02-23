window.onload=function(){
			
		function $(id) {
      return typeof id==='string'?document.getElementById(id):id;
    }
    //搜索框显示与隐藏--start--
    var kk = $("kuang");
    var ss = $("sou");
    ss.onmouseover = function(){
      kk.style.display = "block";
    }
    ss.onmouseleave = function(){
      kk.style.display = "none";
    }
    //搜索框显示与隐藏--end-- 

    //学校通知与信息公告切换--start-- 
    var tz = $("toggle1");
    var part1 = $("part1");
    var gg = $("toggle2");
    var part2 = $("part2");
    tz.onmouseover = function(){
      part1.style.display = "block";
      part2.style.display = "none";
    }
    gg.onmouseover = function(){
      part1.style.display = "none";
      part2.style.display = "block";
    }
    //学校通知与信息公告切换--end--

    //轮播图,ById,所以刚开始把html中的id改成了class，导致了Cannot read property 'getElementsByTagName' of null
      var index=0;
      var timer=null;
      var pic=$("pic").getElementsByTagName("li");
      var num=$("num").getElementsByTagName("li");
      var flash=$("xiaoyuan-wenhua");
      var left=$("left");
      var right=$("right");
      //点击左边的箭头
      left.onclick=function(){
        index--;
        if(index<0){
          index=num.length-1;
        }
        changeOption(index);
      }
      //点击右边的箭头
      right.onclick=function(){
        index++;
        if(index>=num.length){
          index=0;
        }
        changeOption(index);
      } 
      flash.onmouseover=function(){
        clearInterval(timer);
      }
      //鼠标离开窗口，开启计时器
      flash.onmouseout=function(){
        timer=setInterval(run,2000);
      }
            //鼠标划在页签上面，停止计时器，手动切换
        for(var i=0;i<num.length;i++){
            num[i].id=i;
            num[i].onmouseover=function(){
              clearInterval(timer);
              changeOption(this.id);
        }
      }   
            //定义计时器
        timer=setInterval(run,2000)
      //封装函数run
      function run(){
        index++;
        if (index>=num.length) {index=0};
        changeOption(index);
      }
      //封装函数
      function changeOption(curindex){
          //就因为j<num.length写成了j<=num.length,然后就出错
            for(var j=0;j<num.length;j++){
              pic[j].style.display = "none";
              num[j].className = "";
            }
            pic[curindex].style.display = "block";
            num[curindex].className = "active";
            index = curindex;
        }
	//轮播器结束	

    var lis = document.getElementById("navul").getElementsByTagName("li");

    var zhan = document.getElementById("navul").getElementsByTagName("ul");

    for (var i=0;i<lis.length;i++){
      lis[i].id = i;
      lis[i].onmouseover = function(){
        var show = zhan[this.id];
        show.style.display = "block";
        
      }
      lis[i].onmouseleave = function(){
        var show = zhan[this.id];
        show.style.display = "none";
      }
    }
    // var cur_img = 1;
    // var total = 2;
    var handler = function(){

      var btn = document.getElementById("Mybtn");
      var jzbg_zhan = document.getElementById("jzbg-show");
     if(btn.src == "images/jzbg-foot-1.png"){
      btn.src = "images/jzbg-foot-2.png";
      jzbg_zhan.style.display = "none";
     }
     else {
      btn.src = "images/jzbg-foot-1.png";
      jzbg_zhan.style.display = "block";
   }
     }
      
   btn.addEventListener("click",handler,false);

   // btn.addEventListener("click",function(){
   //     this.src = "images/jzbg-foot-2.png";
   //     jzbg_zhan.style.display = "none";
   // },false)
   // btn.addEventListener("click",function(){
   //     this.src = "images/jzbg-foot-1.png";
   //     jzbg_zhan.style.display = "block";
   // },false)
  }




 