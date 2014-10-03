/*
*GVIDOC.js common functions, depends on jQuery JS Library
*
*
*/
//Reduce the length of the string to fill in a div correctly

var suggest = 0;
function DivTextAdjuster(text, length)
{
    if($('#suggest').length)
    {
        if(suggest > 97)
        {
            length = 50;
            if(text.length > length)
            return text.substring(0, length) + '...';
        }
    }

	if(text.length < length)
	return text;

	if(text.length > length)
	return text.substring(0, length) + '...';
}

function LoadGvidocThumbnails(selector)
{
	selector = typeof selector !== 'undefined' ? selector : 'div.video, span.video';
    if($('#suggest').length)
    {
        suggest = $('#suggest').width() / $('#suggest').parent().width() * 100;
        
    }
	$(selector).each(function() {		
			
            if(this.localName == "span")
            {
                var title = $(this).parent().data('title');
                $(this).text(DivTextAdjuster(title, 34));
                $(this).siblings('div.deemphasized').addClass('list-video-series');
            }
            else
            {
                var title = $(this).parent().data('title');
                $(this).text(DivTextAdjuster(title, 35));
            }
		});

	//for each description div...  
    $('div.description, span.description').each(function(){  
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
  

 
    $('.sub > span.watcher').hover(function(){  
        //when mouse hover over the wrapper div  
        //get it's children elements with class description '  
        //and show it using fadeTo
        
        $(this).siblings('.description').children('.description_content').children('button').removeClass('hide');
        $(this).siblings('.description').children('.description_content').children('span.description_content').addClass('hide');
        
        //console.log('Yes 1');

    },function(){  
        //when mouse out of the wrapper div  
        //use fadeTo to hide the div
        $(this).siblings('.description').children('.description_content').children('button').addClass('hide');       
        $(this).siblings('.description').children('.description_content').children('span.description_content').removeClass('hide');
        $(this).siblings('.description').stop().fadeTo(500, 1);
        
        //console.log('Yes 2');       
    });


    $('div.description_content > button.watch-it-later, span.description_content > button.watch-it-later ').hover(function() {

        //console.log('Yes A');
        $(this).siblings('span.description_content').addClass('hide');
        $(this).removeClass('hide');

    }, function() {

         //console.log('Yes B');
         $(this).addClass('hide');
         $(this).siblings('span.description_content').removeClass('hide');

    });

	
}

function LoadGvidocSearchItems(selector) {

    selector = typeof selector !== 'undefined' ? selector : 'div.video';
    
    $(selector).each(function() {            
            var title = $(this).parent().siblings().data('title');
            $(this).text(DivTextAdjuster(title, 35));
            console.log(title);
        });

}