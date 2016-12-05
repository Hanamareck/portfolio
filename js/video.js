        
        $('.aniview').AniView();

		var elementPosition = $('#scrolling-menu').offset();

		var opportunitiesPosition = $('#design-research').offset();	
		var contentStrategyPosition = $('#content-strategy').offset();
		var udlPosition = $('#udl').offset();


		$(window).scroll(function(){
		        if($(window).scrollTop() > elementPosition.top){
		              $('#scrolling-menu').css('position','fixed').css('top','0').css('width','26%');
		        } else {
		            $('#scrolling-menu').css('position','static').css('width','auto');
		        }    

		        if($(window).scrollTop() > opportunitiesPosition.top){
		            $('#scrolling-menu-content').html("Design Research.");
		        } 

                if($(window).scrollTop() > contentStrategyPosition.top){
		              $('#scrolling-menu-content').html("Content Strategy.");
		        } 
            
                if($(window).scrollTop() > udlPosition.top){
		              $('#scrolling-menu-content').html("Universal Design for Learning.");
		        } 
		});
        