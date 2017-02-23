 window.onload = function(){

        	function $(id){
        		return typeof id==='string'?document.getElementById(id):id;
        	}
        	var index=0;
			var timer=null;
			var pic=$("pic").getElementsByTagName("li");
			var num=$("num").getElementsByTagName("li");
			var flash=$("flash");
			var left=$("left");
			var right=$("right");
            //点击左边的箭头
        	left.onclick=function(){
				index--;
				if (index<0) {index=num.length-1};
				changeOption(index);
			}
        	//点击右边的箭头
            right.onclick=function(){
				index++;
				if (index>=num.length) {index=0};
				changeOption(index);
			}	
        	flash.onmouseover=function(){
				clearInterval(timer);
			}
			//鼠标离开窗口，开启计时器
			flash.onmouseout=function(){
				timer=setInterval(run,1000);
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
            timer=setInterval(run,1000);
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
                console.log(curindex);
                index = curindex;
            }
            // 轮播器--end--
            // 瀑布流布局--start--
            var div = document.getElementById("main-bd");
         	var tu = document.getElementById("main-bd-pic");
         	var elements = tu.getElementsByTagName('li');
         	// alert(elements.length);
         	ahigh = {a1:[],a2:[],a3:[],a4:[]};
         	for(var i=0;i<elements.length;i++){
                var num = i%4;
                switch(num){
                    case 0:
                    elements[i].style.left = 0;
                    ahigh.a1.push(elements[i].offsetHeight);
                    step = Math.floor(i/4);
                    if(!step){
                    	elements[i].style.top = 0;
                    }else{
                    	var sum = 0;
                    	for(var j=0;j<step;j++){
                    		sum = sum+ahigh.a1[j];
                    	}
                    	elements[i].style.top = sum+"px";
                    }
                    break;
                    case 1:
                    elements[i].style.left = 291 + "px";
                    ahigh.a2.push(elements[i].offsetHeight);
                    step = Math.floor(i/4);
                    if(!step){
                    	elements[i].style.top = 0;
                    }else{
                    	var sum = 0;
                    	for(var j=0;j<step;j++){
                    		sum = sum+ahigh.a2[j];
                    	}
                    	elements[i].style.top = sum+"px";
                    }
                    break;
                    case 2:
                    elements[i].style.left = 582 + "px";
                    ahigh.a3.push(elements[i].offsetHeight);
                    step = Math.floor(i/4);
                    if(!step){
                    	elements[i].style.top = 0;
                    }else{
                    	var sum = 0;
                    	for(var j=0;j<step;j++){
                    		sum = sum+ahigh.a3[j];
                    	}
                    	elements[i].style.top = sum+"px";
                    }
                    break;
                    case 3:
                    elements[i].style.left = 873 + "px";
                    ahigh.a4.push(elements[i].offsetHeight);
                    step = Math.floor(i/4);
                    if(!step){
                    	elements[i].style.top = 0;
                    }else{
                    	var sum = 0;
                    	for(var j=0;j<step;j++){
                    		sum = sum+ahigh.a4[j];
                    	}
                    	elements[i].style.top = sum+"px";
                    }
                    break;
                }
         	}
        }






















