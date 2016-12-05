        $('.aniview').AniView();

		var elementPosition = $('#scrolling-menu').offset();


		var opportunitiesPosition = $('#opportunities').offset();	
		var researchPosition = $('#research-analysis').offset();
		var creationPosition = $('#app-creation').offset();
		var processPosition = $('#process').offset();


		$(window).scroll(function(){
		        if($(window).scrollTop() > elementPosition.top){
		              $('#scrolling-menu').css('position','fixed').css('top','0').css('width','26%');
		        } else {
		            $('#scrolling-menu').css('position','static').css('width','auto');
		        }    

		        if($(window).scrollTop() > opportunitiesPosition.top){
		            $('#scrolling-menu-content').html("Finding Openings.");
		        } 

		        if($(window).scrollTop() > researchPosition.top){
		              $('#scrolling-menu-content').html("Research Analysis.");
		        } 
            
                if($(window).scrollTop() > processPosition.top){
		              $('#scrolling-menu-content').html("Process.");
		        } 


		        if($(window).scrollTop() > creationPosition.top){
		              $('#scrolling-menu-content').html("App Creation.");
		        } 

		});
