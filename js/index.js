$(document).ready(function(){
    /*自制的小屏下拉菜单*/
    $("#menu").click(function(){
		$("#none").slideToggle("slow");
	});  
    $("#menua").click(function(){
		$("#none").slideToggle("slow");
	});  
    $("#menub").click(function(){
		$("#none").slideToggle("slow");
	});  
    
     $(function(){
		
		        $('#goToTop').hide();        //隐藏go to top按钮
		
		        $(window).scroll(function(){
		            // console.log($(this).scrollTop());
		
		            //当window的scrolltop距离大于1时，go to 
		            if($(this).scrollTop() > 100){
		                $('#goToTop').fadeIn();
		            }else{
		                $('#goToTop').fadeOut();
		            }
		        });
		
		        $('#goToTop').click(function(){
		            $('html ,body').animate({scrollTop: 0}, 300);
		            return false;
		        });
		    });
});
