var guide = false;		
var active = false;
var scrollBool = true;
var viewPortWidth = -1;

		$(function(){

			$.fn.fadeInWithDelay = function(){
                    var delay = 0;
                    return this.each(function(){
                        $(this).delay(delay).animate({opacity:1}, 2000);
                        delay += 100;
                    });
                };	
		});


			
		
		

		$( document ).ready(function() {

			viewPortWidth = $( window ).width();

			$('div.side').css('display', 'none');
			var temp = $('#searchInput > input[type="text"]').css('width');
			var defaultSide = $('div.side').css('width');

			
			//console.log(defaultSide);
			//$('div.videoAssembly').css('margin-left', '30px');

			

			
			LoadGvidocSearchItems();
		
		// Side Bar Animation  Script
		$('#start').on('click', function(e) {
			console.log("Guide Engine :"+guide);
			if(guide)
			{
			$('nav.dr-menu').removeClass('dr-menu-open');
			$('a.dr-label').hide();
			$('div.side').animate({ width: "-1px", opacity: "0.0"}, 240);
			
			setTimeout( function() 
			{
			//$('div.videoAssembly').css('margin-left', '30px');
			//$('div.videoAssembly').css('margin-right', '2%');			
			$('#start').css('color', '');
			$('div.side').css('display', 'none');
			}, 250);
						
			guide = false;
			console.log("Hide");
			}
			else
			{

			$('div.side').animate({ width: ""+defaultSide, opacity: "1.0"}, 240);
						
			//$('div.videoAssembly').css('margin-left', '23%');
			//$('div.videoAssembly').css('margin-right', '1%');

			$('#start').css('color', 'red');
			$('div.side').css('width', '0px');

			$('div.side').css('display', '');
			$('a.dr-label').show();

			setTimeout( function() {				
				$('nav.dr-menu').addClass('dr-menu-open');				
			}, 60);
			
			guide = true;
			console.log("Shown");
			}
		});

		$('span.dr-icon-menu').on('click', function(e) {
			if(guide)
			{
			$('nav.dr-menu').removeClass('dr-menu-open');
			$('a.dr-label').hide();
			$('div.side').animate({ width: "-1px", opacity: "0.0"}, 240);
			setTimeout( function() 
			{
			//$('div.videoAssembly').css('margin-left', '30px');
			//$('div.videoAssembly').css('margin-right', '2%');
			$('#start').css('color', '');
			$('div.side').css('display', 'none');
			}, 250);						
			guide = false;	
			}
		});

		
		//Search Bar Animation JQuery
		$('#searchInput > input[type="text"]').on('focus', function(e) {
			if(viewPortWidth > 700)
				$(this).animate({ width: "350px"}, 500);					
		});

		$('#searchInput > input[type="text"]').on('blur', function(e) {
			if(viewPortWidth > 700)
				$(this).animate({ width: ""+temp}, 500);
		});

		$( window ).scroll(function() {			
  			var scrollBool = $('div.branding').visible( true );
  			if(scrollBool)
  			{
  				$('div.side').css({ "margin-top": "-64px", "min-height": "95%" });
  			}
  			else
  			{
  				$('div.side').css({ "margin-top": "-140px", "min-height": "100%" });  				
  			}
		});

		$(window).on('resize', function(e) {
  			// do your stuff 
  			viewPortWidth = $( window ).width();
  			
	});


});