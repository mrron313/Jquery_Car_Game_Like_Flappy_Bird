$(function(){
		
			var container = $('.container');
			var car = $('.car');
			var bar = $('.bar');
			var bar1 = $('.bar1');
			var bar2 = $('.bar2');
			var restart = $('.restart');
			
			var container_height = parseInt(container.height());
			var bar1_width = parseInt(bar1.width());
			var bar2_width = parseInt(bar2.width());
			
			var score = 0 ;
			
			var car_first_position = parseInt(car.css('left'));
			var car_current_position = car_first_position ;			
			
			var bar_first_position = parseInt(bar.css('top'));
			var bar_current_position = bar_first_position ;
			
			var minus ;	var count = 1 ; var times = 2 ;
			
				var the_game =  setInterval(function(){
					
					if( ( collision1(bar1,car) ) ){
						stop_game();
						restart.slideDown();
					}

					else if( ( collision1(bar2,car) ) ){
						stop_game();
						restart.slideDown();
					}
					
					else{
						bar_current_position = bar_current_position + times ;
						bar.css('top' , bar_current_position);
						
						if(bar_current_position > container_height){
							bar_current_position = bar_first_position ;
							score++;
							minus = getRandomInt(50,100) ;
							times++;
							if(count == 0 ){bar1.css('width' , bar1_width + minus );bar2.css('width' , bar2_width - minus); count = 1 ;}
							else {bar1.css('width' , bar1_width - minus );bar2.css('width' , bar2_width + minus); count = 0 ;}
							
						}
						
						$(".car_position span").text(car_current_position);
						$(".bar_position span").text(bar_current_position);
						
						$(".YourScore span").text(score);
						$(".restart span").text(score);
					}
				
				},40);
				
					$(document).keydown(function(e){
						if (e.keyCode == 39) {
							go_right();
						}			
					});			
					
					$(document).keydown(function(e){
						if (e.keyCode == 37) {
							go_left();	
						}
					});
					
					function go_right(){
						if(car_current_position+20 < 300){	   
							car_current_position = car_current_position + 25;
							car.css('left' , car_current_position);
						}
					}

					function go_left(){
						if(car_current_position-20 >= 0){
							car_current_position = car_current_position - 20;
							car.css('left' , car_current_position);		
						}
					}
					
					function stop_game(){
						 clearInterval(the_game);
					}
					
					$( ".submit" ).click(function() {
					  location.reload();
					});
					
					function getRandomInt(min, max) {
						return Math.floor(Math.random() * (max - min + 1)) + min;
					}
					
			 function collision1($div1, $div2) {
					var x1 = $div1.offset().left;
					var y1 = $div1.offset().top;
					var h1 = $div1.outerHeight(true);
					var w1 = $div1.outerWidth(true);
					var b1 = y1 + h1;
					var r1 = x1 + w1;
					var x2 = $div2.offset().left;
					var y2 = $div2.offset().top;
					var h2 = $div2.outerHeight(true);
					var w2 = $div2.outerWidth(true);
					var b2 = y2 + h2;
					var r2 = x2 + w2;

					if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
					return true;
			}			 
				
});
	