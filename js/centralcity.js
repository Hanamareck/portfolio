
        $('.aniview').AniView();

		var elementPosition = $('#scrolling-menu').offset();

		var opportunitiesPosition = $('#opportunities').offset();	
		var creationPosition = $('#making-it-real').offset();
		var gamePosition = $('#face-the-flight').offset();


		$(window).scroll(function(){
		        if($(window).scrollTop() > elementPosition.top){
		              $('#scrolling-menu').css('position','fixed').css('top','0').css('width','26%');
		        } else {
		            $('#scrolling-menu').css('position','static').css('width','auto');
		        }    

		        if($(window).scrollTop() > opportunitiesPosition.top){
		            $('#scrolling-menu-content').html("Sector Analysis.");
		        } 

            
                if($(window).scrollTop() > creationPosition.top){
		              $('#scrolling-menu-content').html("Making it Real.");
		        } 
            
                if($(window).scrollTop() > gamePosition.top){
		              $('#scrolling-menu-content').html("Face the Flight.");
		        } 

		});
                
        $( document ).ready(function() {           
            $("#hamburger").click(function() {
		      $('#hamburger-expanded').toggleClass("visible");              
            });    
        });