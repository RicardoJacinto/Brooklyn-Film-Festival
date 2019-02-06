
//On page load functions-----------------------------------------------------------------------------------------------------------------------------------------------------
// hide div sections in order to load as you scroll down the page.
$(document).ready(function(){

	$('.path').hide();
	$('#navbar').hide();
	$('#intro-text').hide();
	$('#marathon-section').hide();
	$('#movie-selection').hide();
	$('#movie-grid-adults').hide();
	$('#family-section').hide();
	$('#movie-grid-children').hide();
	$('#window-movie-selection').hide();
	$('#latest-news').hide();
	$('#sub-section').hide();
	$('#footer').hide();


// if a navbar-item is clicked than show every item on the page
$('.navbar-items, .navbarM-items').on('click', function(){

	$('.path').show();
	$('#intro-text').show();
	$('#marathon-section').show();
	$('#movie-selection').show();
	$('#movie-grid-adults').show();
	$('#family-section').show();
	$('#movie-grid-children').show();
	$('#window-movie-selection').show();
	$('#latest-news').show();
	$('#sub-section').show();
	$('#footer').show();

   // Because there can only be one active link, removing all clicked classes from the nav items will do the trick to give the impression there's only one active state
   $('.navbar-items, .navbarM-items').removeClass('clicked');
   // Add class clicked to the clicked nav item;
   $(this).addClass('clicked');
         

  });


	$(".fa-bars").on("click", function(e){
  
     $("#container-mobile").slideToggle();

     });

// Get input fields
var username = document.querySelector('#username');
var pass = document.getElementById("password");
var email = document.getElementById("emailAddress");
var ticketNumber = document.querySelector('#ticket-number');
var submit = document.querySelector("#submit");

// Get spans 
var ticketCap = document.querySelector('#ticket-cap');
var subtractTicket= document.getElementById('subtract-ticket');
var subtractTicket1 = document.getElementById('subtract-ticket-1')

// Help section variables
var ticketsHelp = document.querySelector('#ticketsHelp');
var userNameHelp = document.querySelector('#userNameHelp');

// Set correct colors variables depending on user input
var correctColor = "#a0ff77";
var incorrectColor = "red";
    	

//check if #ticket-number is on the correct range
ticketNumber.addEventListener("blur" , function(e){
   
  	if( (e.target.value > 5) || (e.target.value <= 0)){
   
       submit.setAttribute("disabled", "true");
       ticketsHelp.textContent = "Invalid"
       ticketsHelp.style.color = incorrectColor;

   	  }else{

   	     ticketsHelp.textContent = "Valid"
   	     ticketCap.textContent = Number(e.target.value);
         ticketsHelp.style.color = correctColor;

   	     if( userNameHelp.textContent === "Valid" && passwordHelp.textContent ==="Valid" && emailHelp.textContent ==="Valid" &&  ticketsHelp.textContent === "Valid" ){
     				
     				 submit.removeAttribute("disabled");

                  }
   			   }
         });

  // check if username input has the correct length
  username.addEventListener('input', function(e){
             
  	 if( Number(e.target.value.length) >= 3 && Number(e.target.value.length) <= 12 ){
          
         userNameHelp.textContent = "Valid";

         if( userNameHelp.textContent === "Valid" && passwordHelp.textContent ==="Valid" && emailHelp.textContent ==="Valid" && ticketsHelp.textContent === "Valid"){

         	  submit.removeAttribute("disabled"); 
          }

         userNameHelp.style.color = correctColor;  
        
  	 }else{

  		userNameHelp.textContent = "Invalid";
  		userNameHelp.style.color = incorrectColor;
  		submit.setAttribute("disabled", "true");
  	 
  	  }
  });


// check if password input has the correct length     
pass.addEventListener("input", function(e){
 
 var password = e.target.value;

 if(password.length >= 6 && password.length <=12){

 	passwordHelp.textContent = "Valid";
 	passwordHelp.style.color = correctColor;
 	if( userNameHelp.textContent === "Valid" && passwordHelp.textContent ==="Valid" && emailHelp.textContent ==="Valid" && ticketsHelp.textContent === "Valid"){

         	  submit.removeAttribute("disabled"); 
         }
 }else{
  
  passwordHelp.textContent = "Invalid";
  passwordHelp.style.color = incorrectColor;
  submit.setAttribute("disabled", "true");

   }
});


// Checking an email address is entered correctly
email.addEventListener("blur", function (e) {
   var emailRegex = /.+@.+\..+/;
  
    if (!emailRegex.test(e.target.value)) {

    	emailHelp.textContent = "Invalid";
 	    emailHelp.style.color = incorrectColor;

         submit.setAttribute('disabled','true');
    }else{

    	emailHelp.textContent = "Valid";
 	    emailHelp.style.color = correctColor;
       if( userNameHelp.textContent === "Valid" && passwordHelp.textContent ==="Valid" && emailHelp.textContent ==="Valid" && ticketsHelp.textContent === "Valid"){

         	  submit.removeAttribute("disabled"); 
         }
    }
});

// set preventDefault to avoid default behaviour from submit and reset all the variables
submit.addEventListener('click', function(e){
 
 e.preventDefault();
 pass.value = "";
 username.value="";
 email.value="";

 ticketCap.textContent = "0";
 emailHelp.textContent="";
 passwordHelp.textContent="";
 userNameHelp.textContent="";
 ticketsHelp.textContent="";


//Get value from spans through textContent, convert it to a number and then subtract it with ticketNumber.value from input
var getValSpan = Number(subtractTicket.textContent);
var getValSpan1 = Number(subtractTicket1.textContent);


subtractTicket.textContent = getValSpan -  Number(ticketNumber.value);
subtractTicket1.textContent = getValSpan1 - Number(ticketNumber.value);

// reset ticket Number Value
ticketNumber.value = 0;

})


var navbarList = document.querySelectorAll(".navbar-items");
var iterateItems = 0;

// On page load, fade in each navbar-item
navbarList.forEach(function(item){

		    setTimeout(function(){
				
		    	item.style.opacity = "1";
		    
		    }, (500*(iterateItems+1)));
	       
			iterateItems++;
			
		});

//Fade navbar on page load		
$('#navbar').fadeIn(1500);	

//fade title on page load
$('.path').fadeIn(1000);

var letterList = document.querySelectorAll(".path2");
 

 // Fade in letters on top of the title with callback function   
 titleLettersShow(letterList);

});

// On mouse over pic, increment ficaption id in order to identify current position and start animation with translateX
$('.picture').each(function(pic){

		$(this).on("mouseover", function(){
					
				$('#figcaption' + parseInt(pic+1) + '').css({
					transform: 'translateX(0px)'
				});
		});
})		


// On mouse leave bring ficpation to it's original position
$('.picture').on("mouseleave", function(e){

		$('figcaption').css({

			transform: 'translateX(-600px)'
		})
});

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//listen to the scroll of the window---------------------------------------------------------------------------------------------------------------------------------------------------
$(window).scroll(function(e){
     
    // This variable is very important as it tracks the window's scrollTop(); position and all animations are triggered based on this value
	let scrollTop = $(this).scrollTop();

	// Had class sticky in order to fix navbar to the top of $(window), when scrollTop value is bigger than main-header's div bottom position. By adding  + $('.main-header').height(), we can calculate the height of the DIV and reach to bottom of it.
    if(scrollTop >= $('.main-header').offset().top + $('.main-header').height()){ 
        
          $('#navbar').addClass('sticky');

    }else{

    	$('#navbar').removeClass('sticky');

    }

	// While scroling down, .logo will translate/4 on the Y AXIS relative to the scrollTop variable.
	$('.logo').css({

		transform: 'translate(0px, ' + scrollTop/4 + '%)'
	});
    // While scroling down, .brooklyn-man will translate/4  on the Y AXIS relative to the scrollTop variable.
	$('.brooklyn-man').css({

		transform: 'translate(-' +scrollTop/32 + '%, -' + scrollTop/32 + '%)'
	});

    //Same logic as before, when hitting bottom of main-header-200 fadeIn #intro-text
    
	if(scrollTop > $('.main-header').offset().top + ($('.main-header').height()-200) ){ 

		$('#intro-text').fadeIn(1000);

	}

//get pictures	
var pictureList = document.querySelectorAll(".picture");
var iteration = 0;


		// Added this variable as a control method as somethimes the offset().top was set to 0 randomly and would conflict with scrollTop, because scrollTop > 0
		if($('#intro-text').offset().top !=0){

			if(scrollTop > $('#intro-text').offset().top +  $('#intro-text').height()-200 ){ 	 

					pictureList.forEach(function(pic){
	            		// had a delay with setTimeout function in order to load pictures to the page with a sligth delay
					    setTimeout(function(){

			 		   	pic.classList.add('show-pics-y');
		
			    
			 		   }, (125*(iteration+1)));
		       
						iteration++;
					});
	             }  
              }


// Get squares on top of article2
var maratonList = document.querySelectorAll(".mara-square");
    
 		if($('.gallery-intro').offset().top !=0){   

			if(scrollTop > $('.gallery-intro').offset().top + ( $('.gallery-intro').height() -200) ){ 

				$('#marathon-section').fadeIn(1000);
 				
 				//use call back function to elevate the squares
				elevateSquares(maratonList);

			}
		}


    // Get circles that animate on the middle of the page
	var circleList = document.querySelectorAll(".circle");
    var iterateCircle = 0;
    var addTranslateX = 0;
 

if( $('#marathon-section').offset().top !=0 ){
     
	if(scrollTop > $('#marathon-section').offset().top +  $('#marathon-section').height() - 200 ){ 
	         

			circleList.forEach(function(circle){
            
		    setTimeout(function(){
				
				// Translate on X axis and give opacity 1
		    	circle.style.transform = 'translateX(0px)';
		    	circle.style.opacity = "1";
		    
		    
		    }, (125*(iterateCircle+1)));
	       
			iterateCircle++;
			
		});
	 }

}

//fade in movie section

if( $('.movie-window').offset().top !=0 ){

	 	if(scrollTop >  $('.movie-window').offset().top){ 

		$('#movie-selection').fadeIn(1000);

	  }  
	}


// This section makes slidding effects interactive as users scroll down the page
if( $('#movie-selection').offset().top !=0 ){

	 	if(scrollTop > ($('#movie-selection').offset().top + ( $('#movie-selection').height())-900) ){ 

	 		//The purpose of this code is to get a range of negative values to 0. With this the items will scroll from the left and land roughly at the middle of the page
	 		var offset = Math.min(0, (scrollTop - $('.movie-window').offset().top-900));

	 	//fade in movie-grid-adults
	 	$('#movie-grid-adults').fadeIn(2000);

	 	// Translate objects from movie-grid-adults
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
}
 

	//fade #window-movie-selection
	if($('#movie7').offset().top != 0){

	if(scrollTop > $('#movie7').offset().top){ 

	  		$('#window-movie-selection').fadeIn(1000);
	    }
	  }

//Get fadding letters, similiar to main header section
var letterIncList = document.querySelectorAll(".path4");
var iterationLetterInc = 0;

	if ($('#movie9').offset().top != 0){	


		if(scrollTop > $('#movie9').offset().top-150){ 
   		 

	 	$('#leo').css({

		transform: 'translateY(-' +scrollTop/45.5+ '%)'
	});

  //fadding letters with call back function
  titleLettersShow(letterIncList);
  }
}

//Get squares that go up on #family-section

var famList = document.querySelectorAll(".mara-square2");
var colorList = document.querySelectorAll(".color");
var iterationColor = 0;


if ($('#window-movie-selection').offset().top != 0){

	if(scrollTop > $('#window-movie-selection').offset().top + 100 ){

		$('#family-section').fadeIn(2000);

		elevateSquares(famList);
        
         // This function changes colors for each letter for the title'Friendly' on user scroll
		colorList.forEach(function(letter){
      
            //Generate random colors with Math.random() and multiply it by 255.
			var randomNumber1 = parseInt(Math.random()*255);
			var randomNumber2 = parseInt(Math.random()*255);
			var randomNumber3 = parseInt(Math.random()*255);

			setTimeout(function(){
 			
 			// Generate an rgb code and change font color for each letter
			letter.style.color = "rgb("+(randomNumber1)+", "+(randomNumber2)+ ", "+(randomNumber3)+ ")";

			}, 200*(iterationColor+1) );

			iterationColor++;

		});

	} 
 }

if($('#family-section').offset().top!= 0){

 	if(scrollTop > $('#family-section').offset().top - 100 ){ 

	 		var offsetKids = Math.min(0, (scrollTop - $('#movie-grid-children').offset().top+100));

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


 var subList = document.querySelectorAll('.mara-square3');

  if($('#movie7-kids').offset().top != 0){

if(scrollTop > $('#movie7-kids').offset().top ){ 
    
      
  		 $('#latest-news').fadeIn(2000);
    }
  }

  if($('#movie9-kids').offset().top != 0){

if(scrollTop > $('#movie9-kids').offset().top){ 
    				

  		 	 $('#sub-section').fadeIn(2000);
  		       elevateSquares(subList);
    }
  }


  if($('#latest-news').offset().top != 0){

if(scrollTop > $('#latest-news').offset().top){ 
   
    $('#footer').fadeIn(2000);

    }
  }
});  


// CALL BACK FUNCTIONS -------------------------------------------------------------------------

function titleLettersShow(letterList){
 var iterationLetter = 0;
 
// function load letters on top of title sections
setTimeout(function(){

    letterList.forEach(function(letter){
      
		    setTimeout(function(){

		    	letter.classList.add('show-letters');

		    }, (50*(iterationLetter+1)));
	       
			iterationLetter++;
		}); 
}, 100);

}

// function to elevateSquares on .article2 sections
function elevateSquares(squareList){

squareList.forEach(function(square){
		    
		   square.style.transform = 'translateY(10px)';
			
		});
}
