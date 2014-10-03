var guide = false;		
var active = false;
var scrollBool = true;
var viewPortWidth = -1;

var theatre = false;
var time;

		$( document ).ready(function() {

			$('.tip').tipr();


			$('img.logo').addClass('load'); // Grayscale Hoover Effect

			$('div.side').css('display', 'none');
			var temp = $('#searchInput > input[type="text"]').css('width');
			//$('div.videoAssembly').css('margin-left', '30px');

			var defaultSide = $('div.side').css('width');			
			//console.log(defaultSide);			
			var playerHeight = $('#ytplayer').height();
			var playerWidth = $('#ytplayer').width();
			viewPortWidth = $( window ).width();

			

		LoadGvidocThumbnails();
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
  			defaultSide = $('div.side').css('width');			
			console.log(viewPortWidth);			
			playerHeight = $('#ytplayer').height();
			playerWidth = $('#ytplayer').width();

			
			if(viewPortWidth >= 1001 && viewPortWidth <=1584)
			{
				if(theatre)
				{ 
					$('#ytplayer').css('width', '100%');
				}
				else
				{
					$('#ytplayer').css('width', '75%');
				}	

			}
			if(viewPortWidth >= 1585)
			{
				if(theatre)
				$('#ytplayer').css('width', '100%');
				else
				$('#ytplayer').css('width', '100%');
			}

			if(viewPortWidth < 1000)
			{
				LoadGvidocThumbnails();
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

		$('#theatremode').on('click', function(e) {
			
			//time = player.getCurrentTime();
			if(theatre)
			{

				setTimeout(function() {
					$('#suggest').css('margin-top', '');
					console.log(playerHeight);
				}, 500);
				setTimeout(function() {
					$('#theatre-mode').removeClass('theatre').addClass('small left gvidplayer normal');
				}, 250);
				setTimeout(function() {
					if(viewPortWidth >= 1585)
					{
						$('#ytplayer').css('width', '100%');
						$('.main').removeClass('full');
					}
					if(viewPortWidth >= 1001 && viewPortWidth <=1584)
					
						{ $('#ytplayer').css('width', '75%'); }
				}, 250);
				setTimeout(function() {
					$('#ytplayer').css('height', '-=120');
				}, 250);


				//$('#suggest').css('margin-top', ""+playerHeight);
				//$('#theatre-mode').removeClass('theatre').addClass('small left gvidplayer normal');
				//$('#ytplayer').css('width', ''+playerWidth);
				//$('#ytplayer').css('height', ""+playerHeight);
				theatre = false;
				//Normal Mode

			}
			else
			{
				console.log(playerHeight);
				setTimeout(function() {
					$('#ytplayer').css('height', '+=120');
				}, 250);

				setTimeout(function() {
					$('#ytplayer').css('width', '100%');
				}, 250);

				setTimeout(function() {
					if(viewPortWidth >= 1585)
					{
						$('.main').addClass('full');
					}
					$('#theatre-mode').removeClass('small left gvidplayer normal').addClass('theatre');
				}, 250);

				setTimeout(function() {
					$('#suggest').css('margin-top', '0px');
				}, 10);
				
				
				//$('#suggest').css('margin-top', '0px');
				//$('#theatre-mode').removeClass('small left gvidplayer normal').addClass('theatre');
				//$('#ytplayer').css('width', '100%');
				//$('#ytplayer').css('height', '+=120');
				theatre = true;
				//Theatre Mode		
			}

			
			
		});

		/*
		$('#memory1').on('click', function(e) {
			player.seekTo(time, true);
			$('#mem1').addClass('remove');
			
		});

		$('#memory2').on('click', function(e) {
			player.seekTo(time, true);
			$('#mem1').addClass('remove');			
		});
		*/

});