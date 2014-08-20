/*
*GVIDOC.js common functions, depends on jQuery JS Library
*
*
*/
//Reduce the length of the string to fill in a div correctly
function DivTextAdjuster(text, length)
{
	if(text.length < 35)
	return text;

	if(text.length > 35)
	return text.substring(0, length) + '...';
}

function LoadGvidocThumbnails(selector)
{
	selector = typeof selector !== 'undefined' ? selector : 'div.video';
	$(selector).each(function() {			
			var title = $(this).parent().data('title');
			$(this).text(DivTextAdjuster(title, 35));
		});

	//for each description div...  
    $('div.description').each(function(){  
    	//console.log("Yes Here");
        //...set the opacity to 0...  
        $(this).css('opacity', 1);  
        //..set width same as the image...  
        $(this).css('width', $(this).siblings('img').width());  
        //...get the parent (the wrapper) and set it's width same as the image width... '  
        $(this).parent().css('width', $(this).siblings('img').width());  
        //...set the display to block  
        $(this).css('display', 'block');  
    });  
  
    $('div.sub').hover(function(){  
        //when mouse hover over the wrapper div  
        //get it's children elements with class description '  
        //and show it using fadeTo        
        $(this).children('.description').html('<a class="dr-icon dr-icon-camera viewer"></a>');
        $(this).children('.description').css('right', '10px');
        $(this).children('.description').css('background-color', 'grey');
        $(this).children('.description').css('padding', 2);
        $(this).children('.description').css('margin', 1);
        $(this).children('.description').css('z-index', 1000);
        $(this).children('.description').stop().fadeTo(500, 0.9);
    //    console.log('Yes 1');

    },function(){  
        //when mouse out of the wrapper div  
        //use fadeTo to hide the div        
        $(this).children('.description').text($(this).data('length'));        
        $(this).children('.description').css('right', '0px');
        $(this).children('.description').css('background-color', 'black'); 
        $(this).children('.description').css('padding', '');
        $(this).children('.description').css('margin', '');
        $(this).children('.description').css('z-index', '');
        $(this).children('.description').stop().fadeTo(500, 1);
    //if    console.log('Yes 1');       
    });
	
}


