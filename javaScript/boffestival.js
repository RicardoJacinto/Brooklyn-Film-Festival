

$(document).ready(function(){

	$('.path').hide();
	$('.article').hide();
	$('#marathon-section').hide();
	$('.movie-grid-text').hide();
	$('#movie-grid-adults').hide();
	$('#family-section').hide();
	$('#movie-grid-children').hide();
	$('#window-movie-selection').hide();
	$('#footer').hide();
     


	var navbarList = document.querySelectorAll(".navbar-items");
    var iterateItems = 0;


navbarList.forEach(function(item){
            
		    setTimeout(function(){
				
		    	item.style.opacity = "1";
		    
		    
		    }, (500*(iterateItems+1)));
	       
			iterateItems++;
			
		});


	$('.path').fadeIn(1000);

    var letterList = document.querySelectorAll(".path2");

	titleLettersShow(letterList);
});

$('.picture').each(function(pic){


$(this).on("mouseover", function(){
	
				$('#figcaption' + parseInt(pic+1) + '').css({

					transform: 'translateX(0px)'
				});

		});

})		



$('.picture').on("mouseleave", function(e){

		$('figcaption').css({

			transform: 'translateX(-600px)'
		})
});

//listen to the scroll of the window
$(window).scroll(function(e){
     
   
	let scrollTop = $(this).scrollTop();


    if(scrollTop >= $('.main-header').offset().top + $('.main-header').outerHeight(true)){ 
        

          $('#navbar').addClass('sticky');

    }else{
    	$('#navbar').removeClass('sticky');

    }

	
	$('.logo').css({

		transform: 'translate(0px, ' + scrollTop/4 + '%)'
	});

	$('.brooklyn-man').css({

		transform: 'translate(-' +scrollTop/32 + '%, -' + scrollTop/32 + '%)'
	});

	
	var pictureList = document.querySelectorAll(".picture");
    var iteration = 0;

	if(scrollTop > $('.main-header').offset().top + ($('.main-header').outerHeight(true)-200) ){ 

		$('.article').fadeIn(1000);

	}

	if(scrollTop > $('#intro-text').offset().top + ( $('#intro-text').outerHeight(true)-200) ){ 	 


		pictureList.forEach(function(pic){
            
		    setTimeout(function(){

		    	pic.classList.add('show-pics-y');

		    
		    }, (125*(iteration+1)));
	       
			iteration++;
		});

	}  

	var maratonList = document.querySelectorAll(".mara-square");
    

	if(scrollTop > $('.gallery-intro').offset().top + ( $('.gallery-intro').outerHeight(true)-200) ){ 

		$('#marathon-section').fadeIn(1000);
 		
		elevateSquares(maratonList);

	}

	var circleList = document.querySelectorAll(".circle");
    var iterateCircle = 0;
    var addTranslateX = 0;
 

if(($('#marathon-section').offset().top + ($('#marathon-section').outerHeight(true))) != $('#marathon-section').outerHeight(true) ){

	if(scrollTop > ($('#marathon-section').offset().top + ( $('#marathon-section').outerHeight(true)) - 200) ){ 
	         


			circleList.forEach(function(circle){
            
		    setTimeout(function(){
				
		    	circle.style.transform = 'translateX(0px)';
		    	circle.style.opacity = "1";
		    
		    
		    }, (125*(iterateCircle+1)));
	       
			iterateCircle++;
			
		});
	 }

}

	 	if(scrollTop >  $('.movie-window').offset().top){ 

		$('.movie-grid-text').fadeIn(1000);

      
	}


	 	if(scrollTop > ($('.movie-window').offset().top + ( $('.movie-window').outerHeight(true))-200) ){ 

	 			console.log( ($('.movie-window').offset().top + ( $('.movie-window').outerHeight(true))) )

	 		var offset = Math.min(0, (scrollTop - $('.movie-window').offset().top-900));

	 		$('#movie-grid-adults').fadeIn(2000);

	 		
		
		$('#movie1').css({

			transform: 'translateX('+ offset +'px)',
			transition: 'all 1.2s ease-in-out'


		});

	

		$('#movie2').css({

			transform: 'translateX('+ Math.abs(offset) +'px)',
			transition: 'all 1s ease-in-out'

		});

	

		$('#movie4').css({

			transform: 'translateX('+ Math.abs(offset) +'px)',
			transition: 'all 0.8s ease-in-out'

		});

		$('#movie3').css({

			transform: 'translateX('+ Math.abs(offset) +'px)',
			transition: 'all 1s ease-in-out'


		});


		$('#movie6').css({

			transform: 'translateX('+ (offset) +'px)',
			transition: 'all 0.8s ease-in-out'

		});


		$('#movie5').css({

			transform: 'translateX('+ (offset) +'px)',
			transition: 'all 1s ease-in-out'

		});


		$('#movie7').css({

			transform: 'translateX('+ Math.abs(offset) +'px)',
			transition: 'all 0.8s ease-in-out'

		});

		$('#movie8').css({

			transform: 'translateX('+ Math.abs(offset) +'px)',
			transition: 'all 1s ease-in-out'

		});

		$('#movie9').css({

			transform: 'translateX('+ Math.abs(offset) +'px)',
			transition: 'all 1.2s ease-in-out'

	   });
      
	 } 
 

  if($('#movie7').offset().top != 0){

if(scrollTop > $('#movie7').offset().top){ 


  		$('#window-movie-selection').fadeIn(1000);
    }
  }

	 var letterIncList = document.querySelectorAll(".path4");
	 var iterationLetterInc = 0;

	if ($('#movie9').offset().top != 0){	


		if(scrollTop > $('#movie9').offset().top-150){ 
   		 

	 	$('#leo').css({

		transform: 'translateY(-' +scrollTop/45.5+ '%)'
	});

  titleLettersShow(letterIncList);

  }

}

var famList = document.querySelectorAll(".mara-square2");
var colorList = document.querySelectorAll(".color");
var iterationColor = 0;


if ($('#window-movie-selection').offset().top != 0){

	if(scrollTop > $('#window-movie-selection').offset().top+200){


		$('#family-section').fadeIn(2000);

		elevateSquares(famList);

		colorList.forEach(function(letter){

			var randomNumber1 = parseInt(Math.random()*255);
			var randomNumber2 = parseInt(Math.random()*255);
			var randomNumber3 = parseInt(Math.random()*255);
			

			setTimeout(function(){

			letter.style.color = "rgb("+(randomNumber1)+", "+(randomNumber2)+ ", "+(randomNumber3)+ ")";

			}, 200*(iterationColor+1) );

			iterationColor++;

		});


	} 
 }



if($('#family-section').offset().top!= 0){

 	if(scrollTop > $('#family-section').offset().top-100){ 

	 		var offsetKids = Math.min(0, (scrollTop - $('#movie-grid-children').offset().top+100));

	 		console.log($('#family-section').offset().top);

	 		$('#movie-grid-children').fadeIn(2000);
		
		$('#movie1-kids').css({

			transform: 'translateX('+ offsetKids +'px)',
			transition: 'all 1.2s ease-in-out'


		});

	

		$('#movie2-kids').css({

			transform: 'translateX('+ Math.abs(offsetKids) +'px)',
			transition: 'all 1s ease-in-out'

		});

	

		$('#movie4-kids').css({

			transform: 'translateX('+ Math.abs(offsetKids) +'px)',
			transition: 'all 0.8s ease-in-out'

		});

		$('#movie3-kids').css({

			transform: 'translateX('+ Math.abs(offsetKids) +'px)',
			transition: 'all 1s ease-in-out'


		});


		$('#movie6-kids').css({

			transform: 'translateX('+ (offsetKids) +'px)',
			transition: 'all 0.8s ease-in-out'

		});


		$('#movie5-kids').css({

			transform: 'translateX('+ (offsetKids) +'px)',
			transition: 'all 1s ease-in-out'

		});


		$('#movie7-kids').css({

			transform: 'translateX('+ Math.abs(offsetKids) +'px)',
			transition: 'all 0.8s ease-in-out'

		});

		$('#movie8-kids').css({

			transform: 'translateX('+ Math.abs(offsetKids) +'px)',
			transition: 'all 1s ease-in-out'

		});

		$('#movie9-kids').css({

			transform: 'translateX('+ Math.abs(offsetKids) +'px)',
			transition: 'all 1.2s ease-in-out'

	   });
      
	 } 
}

  if($('#movie7-kids').offset().top != 0){

if(scrollTop > $('#movie7-kids').offset().top){ 


  		$('#footer').fadeIn(1000);
    }
  }

});  


// CALL BACK FUNCTIONS -------------------------------------------------------------------------

function titleLettersShow(letterList){
 var iterationLetter = 0;
 

setTimeout(function(){

    letterList.forEach(function(letter){
      
		    setTimeout(function(){

		    	letter.classList.add('show-letters');

		    }, (50*(iterationLetter+1)));
	       
			iterationLetter++;
		}); 
}, 100);

}

function elevateSquares(squareList){

squareList.forEach(function(square){
		    
		   square.style.transform = 'translateY(10px)';
			
		});

}
