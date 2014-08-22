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
  

 
    $('div.sub > span').hover(function(){  
        //when mouse hover over the wrapper div  
        //get it's children elements with class description '  
        //and show it using fadeTo
        
        $(this).siblings('.description').children('.description_content').children('button').removeClass('hide');
        $(this).siblings('.description').children('.description_content').children('span.description_content').addClass('hide');
        
        console.log('Yes 1');

    },function(){  
        //when mouse out of the wrapper div  
        //use fadeTo to hide the div
        $(this).siblings('.description').children('.description_content').children('button').addClass('hide');       
        $(this).siblings('.description').children('.description_content').children('span.description_content').removeClass('hide');
        $(this).siblings('.description').stop().fadeTo(500, 1);
        
        console.log('Yes 2');       
    });


    $('div.description_content > button.watch-it-later').hover(function() {

        console.log('Yes A');
        $(this).siblings('span.description_content').addClass('hide');
        $(this).removeClass('hide');

    }, function() {

         console.log('Yes B');
         $(this).addClass('hide');
         $(this).siblings('span.description_content').removeClass('hide');

    });

	
}